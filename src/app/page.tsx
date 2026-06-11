import dynamic from "next/dynamic";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero-section";

const AboutSection = dynamic(
  () =>
    import("@/components/sections/about-section").then((m) => m.AboutSection),
  { loading: () => <SectionSkeleton /> }
);

const SolarSection = dynamic(
  () =>
    import("@/components/sections/solar-section").then((m) => m.SolarSection),
  { loading: () => <SectionSkeleton /> }
);

const ChargerSection = dynamic(
  () =>
    import("@/components/sections/charger-section").then(
      (m) => m.ChargerSection
    ),
  { loading: () => <SectionSkeleton /> }
);

const DifferentialsSection = dynamic(
  () =>
    import("@/components/sections/differentials-section").then(
      (m) => m.DifferentialsSection
    ),
  { loading: () => <SectionSkeleton /> }
);

const LeadershipSection = dynamic(
  () =>
    import("@/components/sections/leadership-section").then(
      (m) => m.LeadershipSection
    ),
  { loading: () => <SectionSkeleton /> }
);

const ReturnSection = dynamic(
  () =>
    import("@/components/sections/return-section").then((m) => m.ReturnSection),
  { loading: () => <SectionSkeleton /> }
);

const ScarcitySection = dynamic(
  () =>
    import("@/components/sections/scarcity-section").then(
      (m) => m.ScarcitySection
    ),
  { loading: () => <SectionSkeleton /> }
);

const FormSection = dynamic(
  () =>
    import("@/components/sections/form-section").then((m) => m.FormSection),
  { loading: () => <SectionSkeleton /> }
);

function SectionSkeleton() {
  return <div className="h-96 animate-pulse bg-muted/30" />;
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SolarSection />
        <ChargerSection />
        <DifferentialsSection />
        <LeadershipSection />
        <ReturnSection />
        <ScarcitySection />
        {/*<FormSection />*/}
      </main>
      <Footer />
    </>
  );
}
