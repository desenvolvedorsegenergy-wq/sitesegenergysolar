import type { LeadFormData } from "@/types";

export type CRMProvider = "hubspot" | "rdstation" | "pipedrive";

interface CRMResult {
  success: boolean;
  provider: CRMProvider;
  externalId?: string;
  error?: string;
}

function getEnabledProviders(): CRMProvider[] {
  const providers: CRMProvider[] = [];
  if (process.env.HUBSPOT_API_KEY) providers.push("hubspot");
  if (process.env.RD_STATION_TOKEN) providers.push("rdstation");
  if (process.env.PIPEDRIVE_API_TOKEN) providers.push("pipedrive");
  return providers;
}

async function sendToHubSpot(data: LeadFormData): Promise<CRMResult> {
  const apiKey = process.env.HUBSPOT_API_KEY;
  if (!apiKey) {
    return { success: false, provider: "hubspot", error: "API key not configured" };
  }

  try {
    const response = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          properties: {
            firstname: data.name.split(" ")[0],
            lastname: data.name.split(" ").slice(1).join(" ") || data.name,
            email: data.email,
            phone: data.phone,
            mobilephone: data.whatsapp,
            city: data.city,
            state: data.state,
            hs_lead_status: "NEW",
            interest_type: data.interest,
          },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      return { success: false, provider: "hubspot", error };
    }

    const result = await response.json();
    return { success: true, provider: "hubspot", externalId: result.id };
  } catch (error) {
    return {
      success: false,
      provider: "hubspot",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

async function sendToRDStation(data: LeadFormData): Promise<CRMResult> {
  const token = process.env.RD_STATION_TOKEN;
  if (!token) {
    return { success: false, provider: "rdstation", error: "Token not configured" };
  }

  try {
    const response = await fetch(
      "https://api.rd.services/platform/conversions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          event_type: "CONVERSION",
          event_family: "CDP",
          payload: {
            conversion_identifier: "segenergysolar-lead-form",
            name: data.name,
            email: data.email,
            personal_phone: data.phone,
            mobile_phone: data.whatsapp,
            city: data.city,
            state: data.state,
            cf_interest: data.interest,
          },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      return { success: false, provider: "rdstation", error };
    }

    return { success: true, provider: "rdstation" };
  } catch (error) {
    return {
      success: false,
      provider: "rdstation",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

async function sendToPipedrive(data: LeadFormData): Promise<CRMResult> {
  const token = process.env.PIPEDRIVE_API_TOKEN;
  if (!token) {
    return { success: false, provider: "pipedrive", error: "Token not configured" };
  }

  try {
    const response = await fetch(
      `https://api.pipedrive.com/v1/persons?api_token=${token}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: [{ value: data.email, primary: true }],
          phone: [
            { value: data.phone, primary: true },
            { value: data.whatsapp, label: "whatsapp" },
          ],
          "address_locality": data.city,
          "address_admin_area_level_1": data.state,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      return { success: false, provider: "pipedrive", error };
    }

    const result = await response.json();
    return {
      success: true,
      provider: "pipedrive",
      externalId: String(result.data?.id),
    };
  } catch (error) {
    return {
      success: false,
      provider: "pipedrive",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

const crmHandlers: Record<
  CRMProvider,
  (data: LeadFormData) => Promise<CRMResult>
> = {
  hubspot: sendToHubSpot,
  rdstation: sendToRDStation,
  pipedrive: sendToPipedrive,
};

export async function dispatchLeadToCRM(data: LeadFormData): Promise<CRMResult[]> {
  const providers = getEnabledProviders();

  if (providers.length === 0) {
    return [];
  }

  return Promise.all(providers.map((provider) => crmHandlers[provider](data)));
}

export function getCRMStatus() {
  return {
    hubspot: !!process.env.HUBSPOT_API_KEY,
    rdstation: !!process.env.RD_STATION_TOKEN,
    pipedrive: !!process.env.PIPEDRIVE_API_TOKEN,
  };
}
