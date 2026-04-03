import { WwdApproach } from "@/components/what-we-do/wwd-approach";
import { WwdOurGoal } from "@/components/what-we-do/wwd-our-goal";
import { WwdWhatThisEnables } from "@/components/what-we-do/wwd-what-this-enables";
import { WwdHero } from "@/components/what-we-do/wwd-hero";
// import { WwdImpact } from "@/components/what-we-do/wwd-impact";
import { WwdProblems } from "@/components/what-we-do/wwd-problems";
import { WwdWhatWereBuilding } from "@/components/what-we-do/wwd-what-were-building";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "What We Do",
  description:
    "The problems we solve, how Magorix thinks differently, and what WiseStudent enables—platform-first, data-driven, community-centered.",
  path: "/what-we-do",
});

export default function WhatWeDoPage() {
  return (
    <main className="flex flex-col bg-background">
      <WwdHero />
      <WwdProblems />
      <WwdWhatWereBuilding />
      <WwdApproach />
      <WwdWhatThisEnables />
      <WwdOurGoal />
      {/* Impact numbers — re-enable when ready
      <WwdImpact />
      */}
    </main>
  );
}
