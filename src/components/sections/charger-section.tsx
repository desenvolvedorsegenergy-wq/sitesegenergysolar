"use client";

import { Check } from "lucide-react";
import { AnimatedSection, FadeIn } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ChargerIllustration } from "@/components/shared/charger-illustration";
import { CHARGER_BENEFITS } from "@/lib/constants";

export function ChargerSection() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(22,163,74,0.05)_0%,_transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn direction="right" className="order-2 flex justify-center lg:order-1 lg:justify-start">
          <img src="/eletroposto.webp" alt="Solar Illustration" className="w-full h-full object-cover rounded-3xl" />
          </FadeIn>

          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              badge="Mobilidade Elétrica"
              title="SegEnergy Charger"
              subtitle="Participe da revolução da mobilidade elétrica."
            />

            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              A frota de veículos elétricos e híbridos cresce rapidamente e a
              infraestrutura de recarga precisa acompanhar essa transformação.
            </p>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Benefícios
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {CHARGER_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 shrink-0 text-seg-green" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
