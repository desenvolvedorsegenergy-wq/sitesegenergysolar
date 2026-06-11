"use client";

import { Check } from "lucide-react";
import { AnimatedSection, FadeIn } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { SolarIllustration } from "@/components/shared/solar-illustration";
import { SOLAR_BENEFITS, SOLAR_MARKETS } from "@/lib/constants";
import { ArrowRight, Globe, TrendingUp, Building2 } from "lucide-react";
import { LinkButton } from "@/components/shared/link-button";


export function SolarSection() {
  return (
    <AnimatedSection
      id="franquias"
      className="relative overflow-hidden bg-seg-gray py-24 dark:bg-seg-navy/30 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="franquias">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              badge="Energia Solar"
              title="SegEnergy Solar"
              subtitle="Transforme o crescimento da energia solar em um negócio altamente lucrativo."
            />
            <ul className="mb-8 space-y-3">
              {SOLAR_MARKETS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-seg-green" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Benefícios
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {SOLAR_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 shrink-0 text-seg-green" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <LinkButton
              href="https://franquiasegenergy.com.br/"
              size="lg"
              className="h-14 bg-seg-green px-8 text-base font-semibold text-white hover:bg-seg-green/90 mt-5"
            >
              Quero ser Franqueado
              <ArrowRight className="ml-2 h-4 w-4" />
            </LinkButton>
          </div>

          <FadeIn direction="left" className="flex justify-center lg:justify-end">
            <img src="/energia-solar.webp" alt="Solar Illustration" className="w-full h-full object-cover rounded-3xl" />
          </FadeIn>
        </div>
      </div>
    </AnimatedSection>
  );
}
