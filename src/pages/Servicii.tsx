import { Link } from "react-router-dom"
import {
  ArrowRight,
  ShieldAlert,
  Cpu,
  ClipboardCheck,
  ShieldCheck,
  Fingerprint,
  Scale,
  GraduationCap,
  Building2,
  BookOpen,
  Users,
} from "lucide-react"
import PageHero from "../components/PageHero"
import { useLocale, useContent, useLocalizedLink } from "../LocaleContext"
import { ui } from "../ui"

const serviceIcons: Record<string, typeof ShieldAlert> = {
  "it-security": ShieldAlert,
  "guvernanta-digitala": Cpu,
  audit: ClipboardCheck,
  consultanta: ShieldCheck,
  dpo: Fingerprint,
  "legal-juridic": Scale,
  cursuri: GraduationCap,
}

export default function Servicii() {
  const locale = useLocale()
  const { servicesOverview } = useContent()
  const t = ui[locale].servicii
  const toLocale = useLocalizedLink()

  return (
    <div>
      <PageHero eyebrow={t.heroEyebrow} title={t.heroTitle} lede={t.heroLede} />

      {/* Service portfolio grid */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesOverview.map((service) => {
            const Icon = serviceIcons[service.slug] ?? ShieldCheck
            return (
              <div
                key={service.slug}
                className="flex flex-col border border-navy-950/10 bg-white p-7 hover:border-gold-500/60 hover:shadow-md transition-all"
              >
                <Icon className="text-gold-600 mb-4" size={30} strokeWidth={1.5} />
                <h3 className="text-lg text-navy-950 font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-xs leading-relaxed text-slate-700">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  to={toLocale(`/${service.slug}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-gold-600 mt-6 pt-4 border-t border-navy-950/5"
                >
                  {t.detailsLabel} <ArrowRight size={13} />
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* Cross-sell band: sectors / resources / team */}
      <section className="bg-paper-100 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              to={toLocale("/cursuri")}
              className="border border-navy-950/10 bg-white p-6 hover:border-gold-500/60 transition-colors"
            >
              <Building2 className="text-gold-600 mb-3" size={24} strokeWidth={1.5} />
              <span className="eyebrow">{t.sectorsEyebrow}</span>
              <h3 className="mt-1.5 text-sm font-bold text-navy-950">{t.sectorsTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{t.sectorsBody}</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-gold-600 mt-4">
                {t.sectorsLink} <ArrowRight size={13} />
              </span>
            </Link>

            <Link
              to={toLocale("/guvernanta-digitala")}
              className="border border-navy-950/10 bg-white p-6 hover:border-gold-500/60 transition-colors"
            >
              <BookOpen className="text-gold-600 mb-3" size={24} strokeWidth={1.5} />
              <span className="eyebrow">{t.resourcesEyebrow}</span>
              <h3 className="mt-1.5 text-sm font-bold text-navy-950">{t.resourcesTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{t.resourcesBody}</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-gold-600 mt-4">
                {t.resourcesLink} <ArrowRight size={13} />
              </span>
            </Link>

            <Link
              to={toLocale("/echipa")}
              className="border border-navy-950/10 bg-white p-6 hover:border-gold-500/60 transition-colors"
            >
              <Users className="text-gold-600 mb-3" size={24} strokeWidth={1.5} />
              <span className="eyebrow">{t.teamEyebrow}</span>
              <h3 className="mt-1.5 text-sm font-bold text-navy-950">{t.teamTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{t.teamBody}</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-gold-600 mt-4">
                {t.teamLink} <ArrowRight size={13} />
              </span>
            </Link>
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
