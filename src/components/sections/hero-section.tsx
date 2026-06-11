"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, TrendingUp, Building2 } from "lucide-react";
import { LinkButton } from "@/components/shared/link-button";
import { Counter } from "@/components/shared/counter";
import { HERO_STATS } from "@/lib/constants";

const statIcons = [TrendingUp, Globe, Building2, Building2];

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-seg-navy"
      
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-seg-navy via-[#0d2847] to-seg-navy" 
        style={{
          backgroundImage: "url('/fd-heroes.webp')",
          backgroundSize: "auto 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center right",
        }}
        />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(22,163,74,0.15)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(22,163,74,0.08)_0%,_transparent_50%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-24 pb-16 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-seg-green/30 bg-seg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-seg-green">
            <span className="h-1.5 w-1.5 rounded-full bg-seg-green animate-pulse" />
            Oportunidade de Franquia
          </span>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            O futuro da energia está criando os{" "}
            <span className="bg-gradient-to-r from-seg-green to-emerald-400 bg-clip-text text-transparent">
              próximos grandes empresários
            </span>{" "}
            do Brasil.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Invista em um dos mercados que mais crescem no mundo através das
            franquias SegEnergy Solar e SegEnergy Charger.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <LinkButton
              href="#franquias"
              size="lg"
              className="h-14 bg-seg-green px-8 text-base font-semibold text-white hover:bg-seg-green/90"
            >
              Quero ser Franqueado
              <ArrowRight className="ml-2 h-4 w-4" />
            </LinkButton>
            <LinkButton
              href="#franquias"
              size="lg"
              variant="outline"
              className="h-14 border-white/20 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
            >
              Receber Apresentação
            </LinkButton>
          </div>
        </motion.div>

        {/* Stats cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {HERO_STATS.map((stat, index) => {
            const Icon = statIcons[index];
            return (
              <div
                key={stat.label}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-seg-green/30 hover:bg-white/10"
              >
                {Icon && (
                  <Icon className="mb-3 h-5 w-5 text-seg-green opacity-80" />
                )}
                {"isText" in stat && stat.isText ? (
                  <span className="block text-lg font-bold text-white sm:text-xl">
                    Grupo empresarial consolidado
                  </span>
                ) : (
                  <Counter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.suffix === " bi" ? 1 : 0}
                    label={stat.label}
                  />
                )}
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 mt-4"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5 ">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-seg-green"
          />
        </div>
      </motion.div>
    </section>
  );
}
