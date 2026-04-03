import { AboutApproach } from "@/components/about/about-approach";
import { AboutHero } from "@/components/about/about-hero";
import { AboutMissionVision } from "@/components/about/about-mission-vision";
import { AboutTeam } from "@/components/about/about-team";
import { AboutTimeline } from "@/components/about/about-timeline";
import { AboutValues } from "@/components/about/about-values";
import { AboutWhatWeBelieve } from "@/components/about/about-what-we-believe";
import { AboutWhyThisMatters } from "@/components/about/about-why-this-matters";
import { pageMetadata } from "@/lib/metadata";

/** Avoid stale static HTML for this page in dev / after content edits. */
export const dynamic = "force-dynamic";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Why we started Magorix—our story, mission and vision, values, and team.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="flex flex-col bg-background">
      <AboutHero />
      <AboutTimeline />
      <AboutApproach />
      <AboutWhyThisMatters />
      <AboutMissionVision />
      <AboutWhatWeBelieve />
      <AboutValues />
      <AboutTeam />
    </main>
  );
}
