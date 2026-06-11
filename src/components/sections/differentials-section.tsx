"use client";

import {
  Building2,
  Megaphone,
  Network,
  Rocket,
  Scale,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  staggerItem,
} from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { DIFFERENTIALS } from "@/lib/constants";
import { motion } from "framer-motion";

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  Rocket,
  Scale,
  Megaphone,
  Network,
  Building2,
};

export function DifferentialsSection() {
  return (
    <AnimatedSection className="bg-seg-gray py-24 dark:bg-seg-navy/20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Por que a SegEnergy é diferente?" />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIALS.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-seg-green/30 hover:shadow-lg"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 scale-x-0 bg-gradient-to-r from-seg-green to-emerald-400 transition-transform group-hover:scale-x-100" />

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-seg-green/10 text-seg-green transition-colors group-hover:bg-seg-green group-hover:text-white">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>

                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
