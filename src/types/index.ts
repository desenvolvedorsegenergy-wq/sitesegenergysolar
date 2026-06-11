export type InterestType = "solar" | "charger" | "both";

export interface LeadFormData {
  name: string;
  phone: string;
  whatsapp: string;
  city: string;
  state: string;
  email: string;
  interest: InterestType;
}

export interface LeadSubmissionResponse {
  success: boolean;
  message: string;
  leadId?: string;
}

export type CRMProvider = "hubspot" | "rdstation" | "pipedrive";

export interface CRMIntegrationConfig {
  provider: CRMProvider;
  enabled: boolean;
  apiKey?: string;
  endpoint?: string;
}
