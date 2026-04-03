import Link from "next/link";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const SEND_ITEMS = [
  "Your profile",
  "A short note on what you want to learn next",
  "One thing you've built that you're proud of",
] as const;

const MAIL_HREF =
  "mailto:careers@magorix.com?subject=Application%20%E2%80%94%20Magorix";

type CareersApplyCtaProps = {
  className?: string;
};

export function CareersApplyCta({ className }: CareersApplyCtaProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-[#06080d] py-section-sm md:py-section lg:pb-section-lg",
        className
      )}
      aria-labelledby="careers-apply-heading"
    >
      <Container>
        <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[1fr_1fr] lg:gap-12 lg:items-start">
          <div>
            <h2
              id="careers-apply-heading"
              className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl"
            >
              Applying is simple
            </h2>
            <p className="mt-4 font-heading text-sm font-semibold uppercase tracking-[0.18em] text-foreground/45">
              Send us:
            </p>
            <ul className="mt-5 grid list-none gap-3">
              {SEND_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base leading-relaxed text-foreground/75 md:text-[17px]"
                >
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm italic text-foreground/50 md:text-base">
              Clarity matters more than format.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-5 lg:mt-0">
            <a
              href={MAIL_HREF}
              className={cn(
                "group flex items-center gap-4 rounded-2xl border border-white/[0.1] bg-[#0c111c] p-6 transition-[border-color,box-shadow] duration-300",
                "hover:border-accent/30 hover:shadow-[0_0_40px_-14px_rgba(79,142,247,0.25)]"
              )}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                <Mail className="h-6 w-6" strokeWidth={1.75} aria-hidden />
              </span>
              <div className="min-w-0 text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/45">
                  Email
                </p>
                <p className="mt-1 font-mono text-base font-medium text-foreground break-all md:text-lg">
                  careers@magorix.com
                </p>
              </div>
            </a>

            <Link
              href="/contact"
              className={cn(
                "flex items-center justify-center rounded-2xl border border-accent/35 bg-accent/[0.12] px-6 py-4 text-center font-heading text-base font-semibold text-accent",
                "transition-[background-color,border-color,box-shadow] duration-300",
                "hover:bg-accent/20 hover:shadow-[0_0_36px_-12px_rgba(79,142,247,0.4)]"
              )}
            >
              Or use the contact form
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
