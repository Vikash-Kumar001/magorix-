import { buttonBaseClass, buttonVariantClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const WISESTUDENT_URL = "https://www.wisestudent.org/";

type WiseStudentCtaProps = {
  className?: string;
};

export function WiseStudentCta({ className }: WiseStudentCtaProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-background pb-section-lg pt-section-sm md:pb-section-lg md:pt-section",
        className
      )}
      aria-labelledby="wisestudent-cta-heading"
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-[linear-gradient(135deg,rgba(79,142,247,0.18),rgba(8,10,16,0.98))] p-1 shadow-[0_32px_80px_-32px_rgba(79,142,247,0.45)]">
            <div className="relative rounded-[1.35rem] border border-white/[0.06] bg-[#080a10] px-6 py-12 text-center md:px-12 md:py-16">
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.2),transparent_65%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-16 left-1/4 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(79,142,247,0.1),transparent_72%)]"
                aria-hidden
              />

              <div className="relative">
                <h2
                  id="wisestudent-cta-heading"
                  className="mx-auto max-w-2xl font-heading text-2xl font-bold leading-tight tracking-[-0.03em] text-foreground md:text-3xl lg:text-4xl"
                >
                  Bring WiseStudent to your school
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-foreground/65 md:text-lg">
                  Be among the first institutions to prepare students for real
                  life—not just exams.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href={WISESTUDENT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonBaseClass,
                      buttonVariantClasses.primary,
                      "min-h-[52px] min-w-[200px] px-8 py-3.5 text-base font-semibold"
                    )}
                  >
                    Request Access
                  </a>
                  <a
                    href={WISESTUDENT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonBaseClass,
                      buttonVariantClasses.secondary,
                      "min-h-[52px] min-w-[200px] px-8 py-3.5 text-base font-semibold"
                    )}
                  >
                    Book a Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
