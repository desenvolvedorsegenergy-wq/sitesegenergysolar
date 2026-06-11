import type { InterestType, LeadFormData } from "@/types";

export interface ValidationError {
  field: keyof LeadFormData;
  message: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s()+-]{10,}$/;

export function validateLeadForm(data: Partial<LeadFormData>): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!data.name?.trim()) {
    errors.push({ field: "name", message: "Nome é obrigatório" });
  }

  if (!data.phone?.trim() || !PHONE_REGEX.test(data.phone)) {
    errors.push({ field: "phone", message: "Telefone inválido" });
  }

  if (!data.whatsapp?.trim() || !PHONE_REGEX.test(data.whatsapp)) {
    errors.push({ field: "whatsapp", message: "WhatsApp inválido" });
  }

  if (!data.city?.trim()) {
    errors.push({ field: "city", message: "Cidade é obrigatória" });
  }

  if (!data.state?.trim()) {
    errors.push({ field: "state", message: "Estado é obrigatório" });
  }

  if (!data.email?.trim() || !EMAIL_REGEX.test(data.email)) {
    errors.push({ field: "email", message: "E-mail inválido" });
  }

  const validInterests: InterestType[] = ["solar", "charger", "both"];
  if (!data.interest || !validInterests.includes(data.interest)) {
    errors.push({ field: "interest", message: "Selecione um interesse" });
  }

  return errors;
}
