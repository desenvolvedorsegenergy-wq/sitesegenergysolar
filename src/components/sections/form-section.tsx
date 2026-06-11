"use client";

import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { LeadForm } from "@/components/sections/lead-form";

export function FormSection() {
  return (
    <AnimatedSection
      id="contato"
      className="bg-seg-gray py-24 dark:bg-seg-navy/30 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Solicite uma análise de expansão." />

        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10">
            <LeadForm />
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
