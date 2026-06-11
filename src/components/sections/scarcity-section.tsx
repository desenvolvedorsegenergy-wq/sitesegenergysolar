"use client";

import { MapPin } from "lucide-react";
import { LinkButton } from "@/components/shared/link-button";
import { AnimatedSection } from "@/components/shared/animated-section";

export function ScarcitySection() {
  return (
    <AnimatedSection className="relative overflow-hidden py-24 sm:py-32 scarcity-bg"  >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-500">
            <MapPin className="h-3.5 w-3.5" />
            Disponibilidade Limitada
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            As melhores regiões estão sendo ocupadas agora.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A expansão da rede acontece por disponibilidade territorial.
            Algumas regiões já possuem operação em andamento e novas cidades
            estão sendo avaliadas para implantação.
          </p>

          <p className="mt-4 text-lg font-medium text-foreground">
            Descubra se sua cidade ainda tem potencial.
          </p>

          <LinkButton
            href="#franquias"
            size="lg"
            className="mt-8 h-14 bg-seg-green px-8 text-base font-semibold text-white hover:bg-seg-green/90"
          >
            Consultar Disponibilidade
          </LinkButton>
        </div>
      </div>
    </AnimatedSection>
  );
}
