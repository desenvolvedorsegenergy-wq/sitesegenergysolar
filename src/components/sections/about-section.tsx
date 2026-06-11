"use client";

import { AnimatedSection } from "@/components/shared/animated-section";
import { Counter } from "@/components/shared/counter";
import { SectionHeading } from "@/components/shared/section-heading";
import { GROUP_STATS } from "@/lib/constants";

export function AboutSection() {
  return (
    <AnimatedSection
      id="grupo"
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-seg-navy/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Grupo Zanon"
          title="A força do Grupo Zanon"
          subtitle="A SegEnergy faz parte do Grupo Zanon, um dos maiores ecossistemas de franquias da América Latina."
        />

        <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
          Com mais de 4.000 franquias comercializadas, presença internacional
          em 7 países e mais de R$ 2,5 bilhões em faturamento acumulado, o
          grupo desenvolve negócios escaláveis com foco em inovação, expansão e
          geração de resultados.
        </p>

        <div className="grid gap-8 sm:grid-cols-3">
          {GROUP_STATS.map((stat) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-seg-green to-emerald-400" />
              <div className="text-seg-navy dark:text-white">
                <Counter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.suffix === " bi" ? 1 : 0}
                  className="!text-seg-navy dark:!text-white"
                  labelClassName="!text-muted-foreground"
                  label={stat.label}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
