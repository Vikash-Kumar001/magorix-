import { CareersApplyCta } from "@/components/careers/careers-apply-cta";
import { CareersHero } from "@/components/careers/careers-hero";
import { CareersLookingFor } from "@/components/careers/careers-looking-for";
import { CareersRoles } from "@/components/careers/careers-roles";
import { CareersWhyJoin } from "@/components/careers/careers-why-join";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Careers",
  description:
    "Join Magorix—high ownership, real education problems, open roles across engineering and product, and a simple application process.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <main className="flex flex-col bg-background">
      <CareersHero />
      <CareersWhyJoin />
      <CareersLookingFor />
      <CareersRoles />
      <CareersApplyCta />
    </main>
  );
}
