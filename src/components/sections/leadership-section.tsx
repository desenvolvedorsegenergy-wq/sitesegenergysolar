"use client";

import { AnimatedSection, FadeIn } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { EXECUTIVES } from "@/lib/constants";
import Image from "next/image";

export function LeadershipSection() {
  return (
    <AnimatedSection className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Quem lidera a expansão da SegEnergy" />

        <div className="grid gap-8 md:grid-cols-2">
          {EXECUTIVES.map((executive, index) => (
            <FadeIn key={executive.name} delay={index * 0.15}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-seg-green/30 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-seg-green/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative flex flex-col sm:flex-row">
                  {/* Photo placeholder */}
                  <div className="relative h-80 shrink-0 overflow-hidden sm:h-auto sm:w-48 md:h-60">
                    <div className="flex h-full min-h-[256px] items-center justify-center bg-gradient-to-br from-seg-navy to-[#1E3A5F]">
                      <div className="flex h-80 w-full items-start justify-center rounded-none border-2 border-seg-green/30 bg-seg-navy/80 p-6 text-2xl font-bold text-seg-green backdrop-blur-sm md:w-180 md:items-center md:rounded-full">
                      <Image
                          src={executive.image}
                          alt={executive.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent sm:bg-gradient-to-r" />
                  </div>

                  <div className="relative flex flex-col justify-center p-8">
                    <h3 className="text-xl font-bold text-foreground">
                      {executive.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-seg-green">
                      {executive.role}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {executive.bio}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
