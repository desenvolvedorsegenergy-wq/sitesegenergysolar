import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <Link href="#inicio" className={cn("group flex items-center gap-2.5", className)}>
      <Image src="/logo.svg" alt="Logo" width={180} height={100} />
    </Link>
  );
}
