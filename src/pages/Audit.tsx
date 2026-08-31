import PageHero from "../components/PageHero"
import SectionHeading from "../components/SectionHeading"
import NumberedList from "../components/NumberedList"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useLocale, useContent, useLocalizedLink } from "../LocaleContext"
import { ui } from "../ui"

export default function Audit() {
  const locale = useLocale()
  const { auditStages, dueDiligenceIntro, dueDiligenceAreas } = useContent()
  const t = ui[locale].audit
  const toLocale = useLocalizedLink()

  const stageItems = auditStages.map((s, i) => ({ title: `${t.stagePrefix} ${i + 1}`, body: s }))

  return (
    <div>
      <PageHero eyebrow={t.heroEyebrow} title={t.heroTitle} lede={t.heroLede} />
      <section className="mx-auto max-w-3xl px-5 py-16">
        <SectionHeading eyebrow={t.ddEyebrow} title={t.ddTitle} center={false} />
        <p className="mt-4 text-sm leading-relaxed text-slate-700">{dueDiligenceIntro}</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {dueDiligenceAreas.map((d) => (
            <div key={d.title} className="border-l-2 border-gold-500 pl-5">
              <h3 className="text-sm font-semibold text-navy-950">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{d.body}</p>
            </div>
          ))}
        </div>

        <SectionHeading eyebrow={t.methodologyEyebrow} title={t.methodologyTitle} center={false} className="mt-16" />
        <div className="mt-10">
          <NumberedList items={stageItems} />
        </div>
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
