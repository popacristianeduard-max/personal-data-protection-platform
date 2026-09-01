import PageHero from "../components/PageHero"
import SectionHeading from "../components/SectionHeading"
import { Link } from "react-router-dom"
import { ArrowRight, ExternalLink } from "lucide-react"
import { useLocale, useContent, useLocalizedLink } from "../LocaleContext"
import { ui } from "../ui"

export default function GuvernantaDigitala() {
  const locale = useLocale()
  const { digitalGovernanceIntro, aiActAreas, nis2Areas, governanceStandards, euResources } = useContent()
  const t = ui[locale].guvernantaDigitala
  const toLocale = useLocalizedLink()

  return (
    <div>
      <PageHero eyebrow={t.heroEyebrow} title={t.heroTitle} lede={digitalGovernanceIntro} />

      <section className="mx-auto max-w-5xl px-5 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <SectionHeading eyebrow={t.aiEyebrow} title={t.aiTitle} center={false} />
          <ul className="mt-6 space-y-3">
            {aiActAreas.map((a) => (
              <li key={a} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                {a}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeading eyebrow={t.cyberEyebrow} title={t.cyberTitle} center={false} />
          <ul className="mt-6 space-y-3">
            {nis2Areas.map((a) => (
              <li key={a} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper-100 py-16">
        <div className="mx-auto max-w-5xl px-5">
          <SectionHeading eyebrow={t.standardsEyebrow} title={t.standardsTitle} />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
            {governanceStandards.map((s) => (
              <div key={s.code} className="bg-white border border-navy-950/10 px-5 py-5">
                <p className="font-bold text-navy-950 text-sm tabular">{s.code}</p>
                <p className="text-sm text-slate-500 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <div className="border-l-4 border-gold-500 bg-paper-100 px-6 py-5">
          <span className="eyebrow">{t.riskEyebrow}</span>
          <h3 className="mt-2 text-sm font-bold text-navy-950">{t.riskTitle}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">{t.riskBody}</p>
          <Link
            to={toLocale("/managementul-riscurilor")}
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-gold-600 hover:text-gold-700 transition-colors"
          >
            {t.riskLinkLabel} <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-16">
        <SectionHeading eyebrow={t.resourcesEyebrow} title={t.resourcesTitle} />
        <p className="mt-4 text-sm text-slate-500 text-center max-w-xl mx-auto leading-relaxed">{t.resourcesBody}</p>
        <div className="mt-8 space-y-3">
          {euResources.map((r) => (
            <a
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 border border-navy-950/10 bg-white px-5 py-4 text-sm hover:border-gold-500/60 transition-colors"
            >
              <span className="text-navy-950 font-medium">{r.label}</span>
              <ExternalLink size={15} className="shrink-0 text-gold-600" />
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
