import {
  WiseStudentAudiences,
  WiseStudentCta,
  WiseStudentDifferent,
  WiseStudentHero,
  WiseStudentHowItWorks,
  WiseStudentProblem,
  WiseStudentSolution,
  WiseStudentStatus,
  WiseStudentWhyMatters,
} from "@/components/products/wisestudent";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "WiseStudent",
  description:
    "WiseStudent is Magorix's life-readiness platform—financial awareness, resilience, habits, and real-world preparation for schools, parents, and students.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <main className="flex flex-col bg-background">
      <WiseStudentHero />
      <WiseStudentProblem />
      <WiseStudentSolution />
      <WiseStudentHowItWorks />
      <WiseStudentDifferent />
      <WiseStudentAudiences />
      <WiseStudentWhyMatters />
      <WiseStudentStatus />
      <WiseStudentCta />
    </main>
  );
}
