import PageHero from "../components/PageHero"
import SectionHeading from "../components/SectionHeading"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useLocale, useContent, useLocalizedLink } from "../LocaleContext"
import { ui } from "../ui"

export default function ITSecurity() {
  const locale = useLocale()
  const { cyberSecurityCapabilities, itSecurityDomains, itSecurityBenefits } = useContent()
  const t = ui[locale].itSecurity
  const toLocale = useLocalizedLink()

  return (
    <div>
      <PageHero eyebrow={t.heroEyebrow} title={t.heroTitle} lede={t.heroLede} />
      <section className="mx-auto max-w-3xl px-5 py-16">
        <SectionHeading eyebrow={t.capabilitiesEyebrow} title={t.capabilitiesTitle} center={false} />
        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {cyberSecurityCapabilities.map((d) => (
            <li key={d} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
              {d}
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm leading-relaxed text-slate-700">{t.auditParagraph}</p>

        <SectionHeading eyebrow={t.coverageEyebrow} title={t.coverageTitle} center={false} className="mt-12" />
        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {itSecurityDomains.map((d) => (
            <li key={d} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
              {d}
            </li>
          ))}
        </ul>

        <SectionHeading eyebrow={t.resultEyebrow} title={t.resultTitle} center={false} className="mt-12" />
        <ul className="mt-6 space-y-2.5">
          {itSecurityBenefits.map((b) => (
            <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-12 bg-paper-100 border border-navy-950/10 p-6">
          <p className="text-sm text-slate-700">{t.govCalloutText}</p>
          <Link to={toLocale("/guvernanta-digitala")} className="inline-flex items-center gap-1.5 text-sm font-bold text-gold-600 mt-3">
            {t.govCalloutLink} <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}
