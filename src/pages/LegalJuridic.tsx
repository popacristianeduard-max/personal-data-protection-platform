import PageHero from "../components/PageHero"
import SectionHeading from "../components/SectionHeading"
import LegalProfile from "../components/LegalProfile"
import { useLocale, useContent } from "../LocaleContext"
import { ui } from "../ui"

export default function LegalJuridic() {
  const locale = useLocale()
  const { legalLead, legalIntro, legalAreas, legalDepartments, legalTimeline, legalCredentials } = useContent()
  const t = ui[locale].legalJuridic

  return (
    <div>
      <PageHero eyebrow={t.heroEyebrow} title={t.heroTitle} lede={legalIntro} />
      <section className="mx-auto max-w-5xl px-5 py-16">
        <LegalProfile lead={legalLead} />

        <SectionHeading eyebrow={t.expertiseEyebrow} title={t.expertiseTitle} center={false} className="mt-16" />
        <div className="mt-6 flex flex-wrap gap-2">
          {legalAreas.map((a) => (
            <span key={a} className="border border-navy-950/10 bg-paper-100 px-3.5 py-1.5 text-xs font-medium text-navy-950/80">
              {a}
            </span>
          ))}
        </div>

        <SectionHeading eyebrow={t.structureEyebrow} title={t.structureTitle} center={false} className="mt-16" />
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-500">{t.structureBody}</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {legalDepartments.map((p) => (
            <div key={p.title} className="border-l-2 border-gold-500 pl-5">
              <h3 className="text-sm font-semibold text-navy-950">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.body}</p>
            </div>
          ))}
        </div>

        <SectionHeading eyebrow={t.timelineEyebrow} title={t.timelineTitle} center={false} className="mt-16" />
        <div className="mt-8 space-y-6 border-l border-navy-950/10 pl-6">
          {legalTimeline.map((tl) => (
            <div key={tl.period} className="relative">
              <span className="absolute -left-[27px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold-500" />
              <span className="eyebrow text-gold-600">{tl.period}</span>
              <h3 className="mt-1 text-sm font-bold text-navy-950">{tl.role}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{tl.body}</p>
            </div>
          ))}
        </div>

        <SectionHeading eyebrow={t.educationEyebrow} title={t.educationTitle} center={false} className="mt-16" />
        <ul className="mt-6 space-y-2.5">
          {legalCredentials.map((c) => (
            <li key={c} className="flex gap-3 text-sm leading-relaxed text-slate-700">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
              {c}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
