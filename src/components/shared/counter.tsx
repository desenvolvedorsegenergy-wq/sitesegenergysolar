"use client";

import { useCounter } from "@/hooks/use-counter";
import { cn } from "@/lib/utils";

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  labelClassName?: string;
  label?: string;
}

export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
  labelClassName,
  label,
}: CounterProps) {
  const { count, ref } = useCounter({
    end: value,
    decimals,
    startOnView: true,
  });

  const formatted =
    decimals > 0
      ? count.toLocaleString("pt-BR", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : Math.round(count).toLocaleString("pt-BR");

  return (
    <div className="text-center">
      <span
        ref={ref}
        className={cn(
          "block text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl",
          className
        )}
      >
        {prefix}
        {formatted}
        {suffix}
      </span>
      {label && (
        <span
          className={cn(
            "mt-2 block text-sm text-white/70 sm:text-base",
            labelClassName
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
}
