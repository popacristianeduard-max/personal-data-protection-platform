import PageHero from "../components/PageHero"
import SectionHeading from "../components/SectionHeading"
import NumberedList from "../components/NumberedList"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useLocale, useContent, useLocalizedLink } from "../LocaleContext"
import { ui } from "../ui"

export default function ManagementulRiscurilor() {
  const locale = useLocale()
  const {
    riskManagementIntro,
    riskTypes,
    riskMethodologySteps,
    riskFrameworkPillars,
    riskIntegrationAreas,
    riskBenefits,
  } = useContent()
  const t = ui[locale].managementulRiscurilor
  const toLocale = useLocalizedLink()

  const matrixRows = [
    { impact: t.matrixLow, cells: [t.matrixAccept, t.matrixMonitor, t.matrixReduce] },
    { impact: t.matrixMedium, cells: [t.matrixMonitor, t.matrixReduce, t.matrixReducePriority] },
    { impact: t.matrixHigh, cells: [t.matrixReduce, t.matrixReducePriority, t.matrixEliminate] },
  ]

  return (
    <div>
      <PageHero eyebrow={t.heroEyebrow} title={t.heroTitle} lede={riskManagementIntro} />

      <section className="mx-auto max-w-5xl px-5 py-16">
        {/* Risk types */}
        <SectionHeading eyebrow={t.typesEyebrow} title={t.typesTitle} center={false} />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {riskTypes.map((r) => (
            <div key={r.title} className="border-l-2 border-gold-500 pl-5">
              <h3 className="text-sm font-semibold text-navy-950">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{r.body}</p>
            </div>
          ))}
        </div>

        {/* Unified register */}
        <div className="mt-16 max-w-3xl border-l-4 border-gold-500 bg-paper-100 px-6 py-5">
          <span className="eyebrow">{t.registerEyebrow}</span>
          <h3 className="mt-2 text-sm font-bold text-navy-950">{t.registerTitle}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">{t.registerBody}</p>
        </div>

        {/* Methodology */}
        <SectionHeading eyebrow={t.methodologyEyebrow} title={t.methodologyTitle} center={false} className="mt-16" />
        <div className="mt-8 max-w-2xl">
          <NumberedList items={riskMethodologySteps} />
        </div>

        {/* ISO 31000 framework */}
        <SectionHeading eyebrow={t.frameworkEyebrow} title={t.frameworkTitle} center={false} className="mt-16" />
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {riskFrameworkPillars.map((p) => (
            <div key={p.title} className="bg-white border border-navy-950/10 px-5 py-6">
              <h3 className="text-sm font-bold text-navy-950">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Integration across dimensions */}
        <SectionHeading eyebrow={t.integrationEyebrow} title={t.integrationTitle} center={false} className="mt-16" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {riskIntegrationAreas.map((a) => (
            <div key={a.title} className="border-l-2 border-gold-500 pl-5">
              <h3 className="text-sm font-semibold text-navy-950">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{a.body}</p>
            </div>
          ))}
        </div>

        {/* Treatment matrix */}
        <SectionHeading eyebrow={t.matrixEyebrow} title={t.matrixTitle} center={false} className="mt-16" />
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-navy-950/10 bg-paper-100 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-navy-950">
                  {t.matrixImpactLabel} / {t.matrixProbabilityLabel}
                </th>
                <th className="border border-navy-950/10 bg-paper-100 px-4 py-3 text-xs font-bold uppercase tracking-wide text-navy-950">
                  {t.matrixLow}
                </th>
                <th className="border border-navy-950/10 bg-paper-100 px-4 py-3 text-xs font-bold uppercase tracking-wide text-navy-950">
                  {t.matrixMedium}
                </th>
                <th className="border border-navy-950/10 bg-paper-100 px-4 py-3 text-xs font-bold uppercase tracking-wide text-navy-950">
                  {t.matrixHigh}
                </th>
              </tr>
            </thead>
            <tbody>
              {matrixRows.map((row) => (
                <tr key={row.impact}>
                  <th className="border border-navy-950/10 bg-paper-100 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-navy-950">
                    {row.impact}
                  </th>
                  {row.cells.map((c, i) => (
                    <td key={i} className="border border-navy-950/10 px-4 py-3 text-center text-slate-700">
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Benefits — dark band */}
      <section className="bg-navy-950 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow={t.benefitsEyebrow} title={t.benefitsTitle} light />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-10">
            {riskBenefits.map((b) => (
              <div key={b.title} className="border border-white/15 px-6 py-7 hover:border-gold-400/60 transition-colors">
                <h3 className="text-sm font-bold text-white">{b.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/60">{b.body}</p>
              </div>
            ))}
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
