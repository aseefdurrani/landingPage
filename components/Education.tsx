import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import { site } from "@/data/site";
import { GraduationCap, MapPin } from "lucide-react";

export default function Education() {
  const { education } = site;

  return (
    <SectionWrapper id="education" ariaLabel="Education" className="py-16">
      <SectionHeading title="Education" />
      <article className="card-surface p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-border bg-background">
              <GraduationCap size={22} className="text-accent" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{education.school}</h3>
              <p className="mt-1 text-accent">{education.degree}</p>
              <p className="mt-2 text-sm text-muted">
                {education.honors} · {education.graduation}
              </p>
            </div>
          </div>
          <p className="inline-flex items-center gap-1.5 text-sm text-muted">
            <MapPin size={14} aria-hidden="true" />
            {education.location}
          </p>
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <h4 className="font-mono text-xs uppercase tracking-wider text-accent">
            Relevant Coursework
          </h4>
          <ul className="mt-4 flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <li
                key={course}
                className="rounded border border-border bg-background/50 px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/30 hover:text-foreground"
              >
                {course}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </SectionWrapper>
  );
}
