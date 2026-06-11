"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BRAZIL_STATES, INTEREST_OPTIONS } from "@/lib/constants";
import type { InterestType, LeadFormData } from "@/types";

interface LeadFormProps {
  onSubmit?: (data: LeadFormData) => Promise<void>;
}

export function LeadForm({ onSubmit }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<Partial<LeadFormData>>({
    interest: "both",
  });

  const handleChange = (field: keyof LeadFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.errors) {
          const errorMap: Record<string, string> = {};
          result.errors.forEach(
            (err: { field: string; message: string }) => {
              errorMap[err.field] = err.message;
            }
          );
          setErrors(errorMap);
        }
        return;
      }

      if (onSubmit && formData.name && formData.email) {
        await onSubmit(formData as LeadFormData);
      }

      setIsSuccess(true);
      setFormData({ interest: "both" });
    } catch {
      setErrors({ general: "Erro ao enviar formulário. Tente novamente." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-seg-green/30 bg-seg-green/5 p-12 text-center">
        <CheckCircle2 className="mb-4 h-16 w-16 text-seg-green" />
        <h3 className="text-xl font-bold text-foreground">
          Solicitação enviada com sucesso!
        </h3>
        <p className="mt-2 text-muted-foreground">
          Nossa equipe entrará em contato em breve com mais informações sobre
          a expansão na sua região.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setIsSuccess(false)}
        >
          Enviar nova solicitação
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errors.general && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
          {errors.general}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            placeholder="Seu nome completo"
            value={formData.name ?? ""}
            onChange={(e) => handleChange("name", e.target.value)}
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={formData.email ?? ""}
            onChange={(e) => handleChange("email", e.target.value)}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Telefone</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(11) 99999-9999"
            value={formData.phone ?? ""}
            onChange={(e) => handleChange("phone", e.target.value)}
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && (
            <p className="text-xs text-destructive">{errors.phone}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="whatsapp">WhatsApp</Label>
          <Input
            id="whatsapp"
            type="tel"
            placeholder="(11) 99999-9999"
            value={formData.whatsapp ?? ""}
            onChange={(e) => handleChange("whatsapp", e.target.value)}
            className={errors.whatsapp ? "border-destructive" : ""}
          />
          {errors.whatsapp && (
            <p className="text-xs text-destructive">{errors.whatsapp}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">Cidade</Label>
          <Input
            id="city"
            placeholder="Sua cidade"
            value={formData.city ?? ""}
            onChange={(e) => handleChange("city", e.target.value)}
            className={errors.city ? "border-destructive" : ""}
          />
          {errors.city && (
            <p className="text-xs text-destructive">{errors.city}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="state">Estado</Label>
          <Select
            value={formData.state ?? ""}
            onValueChange={(value) => value && handleChange("state", value)}
          >
            <SelectTrigger
              id="state"
              className={errors.state ? "border-destructive" : ""}
            >
              <SelectValue placeholder="Selecione o estado" />
            </SelectTrigger>
            <SelectContent>
              {BRAZIL_STATES.map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.state && (
            <p className="text-xs text-destructive">{errors.state}</p>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <Label>Interesse</Label>
        <RadioGroup
          value={formData.interest ?? "both"}
          onValueChange={(value) =>
            value && handleChange("interest", value as InterestType)
          }
          className="flex flex-col gap-3 sm:flex-row sm:gap-6"
        >
          {INTEREST_OPTIONS.map((option) => (
            <div key={option.value} className="flex items-center gap-2">
              <RadioGroupItem value={option.value} id={option.value} />
              <Label htmlFor={option.value} className="cursor-pointer font-normal">
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
        {errors.interest && (
          <p className="text-xs text-destructive">{errors.interest}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="h-14 w-full bg-seg-green text-base font-semibold text-white hover:bg-seg-green/90 sm:w-auto sm:px-12"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Quero Receber Informações"
        )}
      </Button>
    </form>
  );
}
