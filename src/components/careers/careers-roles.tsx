import { ArrowUpRight } from "lucide-react";
import { buttonBaseClass, buttonVariantClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type Role = {
  id: string;
  title: string;
  meta: string;
};

const ROLES: Role[] = [
  {
    id: "senior-fullstack",
    title: "Senior Full-stack Engineer",
    meta: "Remote · India · Full-time",
  },
  {
    id: "frontend",
    title: "Frontend Engineer",
    meta: "Remote · India · Full-time",
  },
  {
    id: "designer",
    title: "Product Designer",
    meta: "Remote · India · Full-time",
  },
  {
    id: "pm",
    title: "Product Manager",
    meta: "Remote · India · Full-time",
  },
  {
    id: "cs",
    title: "Customer Success Lead",
    meta: "Remote · India · Full-time",
  },
  {
    id: "finance-ops",
    title: "Finance & Operations",
    meta: "Bengaluru · Hybrid · Full-time",
  },
];

function applyHref(title: string) {
  const subject = encodeURIComponent(`Application — ${title}`);
  return `mailto:careers@magorix.com?subject=${subject}`;
}

type CareersRolesProps = {
  className?: string;
};

export function CareersRoles({ className }: CareersRolesProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] bg-background py-section-sm md:py-section",
        className
      )}
      aria-labelledby="careers-roles-heading"
    >
      <Container>
        <div className="mx-auto max-w-4xl">
          <h2
            id="careers-roles-heading"
            className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl"
          >
            Open Roles
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/55 md:text-base">
            Don&apos;t see a perfect title? Email us anyway—we read every note.
          </p>

          <ul className="mt-10 divide-y divide-white/[0.07] rounded-2xl border border-white/[0.09] bg-[#0c111c] md:mt-12">
            {ROLES.map((role) => (
              <li
                key={role.id}
                className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-5"
              >
                <div className="min-w-0">
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground md:text-xl">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/50">{role.meta}</p>
                </div>
                <a
                  href={applyHref(role.title)}
                  className={cn(
                    buttonBaseClass,
                    buttonVariantClasses.secondary,
                    "inline-flex shrink-0 items-center gap-2 self-start sm:self-center",
                    "border-white/15 bg-white/[0.06] px-5 py-2.5 text-sm font-semibold"
                  )}
                >
                  Apply
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
