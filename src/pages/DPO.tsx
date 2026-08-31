import PageHero from "../components/PageHero"
import SectionHeading from "../components/SectionHeading"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useLocale, useContent, useLocalizedLink } from "../LocaleContext"
import { ui } from "../ui"

export default function DPO() {
  const locale = useLocale()
  const { dpoDescription } = useContent()
  const t = ui[locale].dpo
  const toLocale = useLocalizedLink()

  return (
    <div>
      <PageHero eyebrow={t.heroEyebrow} title={t.heroTitle} lede={dpoDescription.intro} />
      <section className="mx-auto max-w-3xl px-5 py-16">
        <SectionHeading eyebrow={t.independenceEyebrow} title={t.independenceTitle} center={false} />
        <ul className="mt-6 space-y-3">
          {dpoDescription.guarantees.map((g) => (
            <li key={g} className="flex gap-3 text-sm leading-relaxed text-slate-700">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
              {g}
            </li>
          ))}
        </ul>

        <SectionHeading eyebrow={t.dutiesEyebrow} title={t.dutiesTitle} center={false} className="mt-14" />
        <ul className="mt-6 space-y-3">
          {dpoDescription.duties.map((d) => (
            <li key={d} className="flex gap-3 text-sm leading-relaxed text-slate-700">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
              {d}
            </li>
          ))}
        </ul>

        <div className="mt-12 bg-navy-950 p-8 text-center">
          <p className="text-sm text-white/80">{t.ctaText}</p>
          <Link to={toLocale("/contact")} className="btn-gold mt-4 inline-flex">
            {t.ctaButton} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
