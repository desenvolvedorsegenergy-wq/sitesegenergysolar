import { NextResponse } from "next/server";
import { dispatchLeadToCRM } from "@/lib/integrations/crm";
import { validateLeadForm } from "@/lib/validations/lead-form";
import type { LeadFormData } from "@/types";

export async function POST(request: Request) {
  try {
    const body: Partial<LeadFormData> = await request.json();
    const errors = validateLeadForm(body);

    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const data = body as LeadFormData;
    const crmResults = await dispatchLeadToCRM(data);

    const leadId = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;

    console.log("[Lead Submission]", {
      leadId,
      name: data.name,
      email: data.email,
      city: data.city,
      state: data.state,
      interest: data.interest,
      crmResults,
    });

    return NextResponse.json({
      success: true,
      message: "Solicitação recebida com sucesso!",
      leadId,
      crm: crmResults.length > 0 ? crmResults : undefined,
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
