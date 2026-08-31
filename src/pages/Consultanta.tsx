import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import PageHero from "../components/PageHero"
import { useLocale, useContent, useLocalizedLink } from "../LocaleContext"
import { ui } from "../ui"

export default function Consultanta() {
  const locale = useLocale()
  const { consultancyCategories, gdprConsultingNote } = useContent()
  const t = ui[locale].consultanta
  const toLocale = useLocalizedLink()

  return (
    <div>
      <PageHero eyebrow={t.heroEyebrow} title={t.heroTitle} lede={t.heroLede} />
      <section className="mx-auto max-w-5xl px-5 pt-16">
        <p className="text-center text-slate-700 leading-relaxed max-w-3xl mx-auto">{gdprConsultingNote}</p>
      </section>
      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {consultancyCategories.map((cat) => (
            <div key={cat.title} className="border border-navy-950/10 bg-white p-6">
              <h3 className="text-base font-bold text-navy-950" style={{ fontFamily: "var(--font-display)" }}>
                {cat.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Link
            to={toLocale("/guvernanta-digitala")}
            className="border border-navy-950/10 bg-paper-100 p-6 hover:border-gold-500/60 transition-colors"
          >
            <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wide">{t.govCardTitle}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{t.govCardBody}</p>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-gold-600 mt-4">
              {t.detailsLabel} <ArrowRight size={13} />
            </span>
          </Link>
          <Link to={toLocale("/cursuri")} className="border border-navy-950/10 bg-paper-100 p-6 hover:border-gold-500/60 transition-colors">
            <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wide">{t.trainingCardTitle}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{t.trainingCardBody}</p>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-gold-600 mt-4">
              {t.viewProgramsLabel} <ArrowRight size={13} />
            </span>
          </Link>
        </div>
      </section>
    </div>
  )
}
