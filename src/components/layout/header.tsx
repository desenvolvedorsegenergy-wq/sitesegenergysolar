"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/shared/link-button";
import { Logo } from "@/components/shared/logo";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isScrolled
          ? "border-b border-white/10 bg-seg-navy/90 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo variant="light" />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-white/80 hover:bg-white/10 hover:text-white"
              aria-label="Alternar tema"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          )}

          <LinkButton
            href="#franquias"
            size="lg"
            className="hidden bg-seg-green text-white hover:bg-seg-green/90 sm:inline-flex"
          >
            Quero ser Franqueado
          </LinkButton>

          <Button
            variant="ghost"
            size="icon"
            className="text-white md:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Menu"
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="border-t border-white/10 bg-seg-navy/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <LinkButton
              href="#contato"
              size="lg"
              className="mt-2 bg-seg-green text-white hover:bg-seg-green/90"
              onClick={() => setIsMobileOpen(false)}
            >
              Quero ser Franqueado
            </LinkButton>
          </nav>
        </div>
      )}
    </header>
  );
}
