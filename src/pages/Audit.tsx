import PageHero from "../components/PageHero"
import SectionHeading from "../components/SectionHeading"
import { Link } from "react-router-dom"
import { ArrowRight, ShieldCheck, Users, Clock, Receipt, Languages, Lock } from "lucide-react"
import { useLocale, useContent, useLocalizedLink } from "../LocaleContext"
import { ui } from "../ui"

const differentiatorIcons = [Users, ShieldCheck, Clock, Receipt, Languages, Lock]

export default function Audit() {
  const locale = useLocale()
  const {
    dueDiligenceIntro,
    dueDiligenceForeignNote,
    dueDiligenceAudience,
    dueDiligenceAreas,
    dueDiligenceProcess,
    dueDiligenceDeliverables,
    dueDiligenceDifferentiators,
  } = useContent()
  const t = ui[locale].audit
  const toLocale = useLocalizedLink()

  return (
    <div>
      <PageHero eyebrow={t.heroEyebrow} title={t.heroTitle} lede={t.heroLede} />

      {/* Intro + positioning */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <SectionHeading eyebrow={t.ddEyebrow} title={t.ddTitle} center={false} />
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-700">{dueDiligenceIntro}</p>

        <div className="mt-8 max-w-3xl border-l-4 border-gold-500 bg-paper-100 px-6 py-5">
          <span className="eyebrow">{t.foreignEyebrow}</span>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">{dueDiligenceForeignNote}</p>
        </div>

        {/* Client profile */}
        <SectionHeading eyebrow={t.audienceEyebrow} title={t.audienceTitle} center={false} className="mt-16" />
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {dueDiligenceAudience.map((a) => (
            <li key={a} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
              {a}
            </li>
          ))}
        </ul>

        {/* Scope of work */}
        <SectionHeading eyebrow={t.areasEyebrow} title={t.areasTitle} center={false} className="mt-16" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dueDiligenceAreas.map((d) => (
            <div key={d.title} className="border-l-2 border-gold-500 pl-5">
              <h3 className="text-sm font-semibold text-navy-950">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{d.body}</p>
            </div>
          ))}
        </div>

        {/* Process timeline */}
        <SectionHeading eyebrow={t.processEyebrow} title={t.processTitle} center={false} className="mt-16" />
        <div className="mt-8 space-y-6 border-l border-navy-950/10 pl-6">
          {dueDiligenceProcess.map((p) => (
            <div key={p.period} className="relative">
              <span className="absolute -left-[27px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold-500" />
              <span className="eyebrow text-gold-600">{p.period}</span>
              <h3 className="mt-1 text-sm font-bold text-navy-950">{p.role}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Deliverables */}
        <SectionHeading eyebrow={t.deliverablesEyebrow} title={t.deliverablesTitle} center={false} className="mt-16" />
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {dueDiligenceDeliverables.map((d) => (
            <li key={d} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
              {d}
            </li>
          ))}
        </ul>
      </section>

      {/* Differentiators — dark band */}
      <section className="bg-navy-950 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow={t.differentiatorsEyebrow} title={t.differentiatorsTitle} light />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {dueDiligenceDifferentiators.map((diff, i) => {
              const Icon = differentiatorIcons[i % differentiatorIcons.length]
              return (
                <div key={diff.title} className="border border-white/15 px-6 py-7 hover:border-gold-400/60 transition-colors">
                  <Icon className="text-gold-400 mb-4" size={26} strokeWidth={1.5} />
                  <h3 className="text-sm font-bold text-white">{diff.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/60">{diff.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-5 py-16">
        <div className="bg-navy-950 p-8 text-center">
          <p className="text-sm text-white/80">{t.ctaText}</p>
          <Link to={toLocale("/contact")} className="btn-gold mt-4 inline-flex">
            {t.ctaButton} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
