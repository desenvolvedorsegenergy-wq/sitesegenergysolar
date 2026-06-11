import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  badge?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
  badge,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-6 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full border border-seg-green/30 bg-seg-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-seg-green">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
