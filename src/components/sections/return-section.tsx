"use client";

import { TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";

export function ReturnSection() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-seg-navy py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(22,163,74,0.1)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Um modelo validado, com potencial de retorno."
          className="[&_h2]:text-white [&_p]:text-white/70"
        />

        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="text-lg leading-relaxed text-white/70">
            A SegEnergy atua em dois dos setores mais promissores da economia
            moderna: energia renovável e mobilidade elétrica.
          </p>
          <p className="text-lg leading-relaxed text-white/70">
            Nosso modelo foi estruturado para oferecer suporte, processos e
            escalabilidade para empreendedores que desejam construir um negócio
            sólido e de longo prazo.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <div className="relative overflow-hidden rounded-2xl border border-seg-green/30 bg-gradient-to-r from-seg-green/10 to-emerald-500/5 p-8 text-center backdrop-blur-sm">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(22,163,74,0.15)_0%,_transparent_70%)]" />
            <TrendingUp className="relative mx-auto mb-4 h-10 w-10 text-seg-green" />
            <p className="relative text-2xl font-bold text-white sm:text-3xl">
              Mercados em forte expansão.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
