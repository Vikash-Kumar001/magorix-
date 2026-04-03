import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type WiseStudentWhyMattersProps = {
  className?: string;
};

export function WiseStudentWhyMatters({ className }: WiseStudentWhyMattersProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-white/[0.06] bg-background py-section-sm md:py-section",
        className
      )}
      aria-labelledby="wisestudent-why-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(79,142,247,0.08),transparent_45%,rgba(79,142,247,0.05))]"
        aria-hidden
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/[0.08] bg-[#0c111c]/80 px-6 py-10 text-center backdrop-blur-sm md:px-12 md:py-14">
          <h2
            id="wisestudent-why-heading"
            className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl"
          >
            Why It Matters
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-foreground/85 md:text-xl">
            If students are not prepared for life—education is incomplete.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/65 md:text-lg">
            WiseStudent ensures that students don&apos;t just study.
            <span className="mt-3 block font-heading text-xl font-semibold text-accent md:text-2xl">
              They grow.
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
}
