import { Link } from "react-router-dom"
import { ArrowRight, ShieldCheck, ShieldAlert, Scale, ClipboardCheck, Cpu, GraduationCap } from "lucide-react"
import SectionHeading from "../components/SectionHeading"
import { useLocale, useContent, useLocalizedLink } from "../LocaleContext"
import { ui } from "../ui"
import photo1 from "../assets/curs-gdpr-1.jpg"
import photo2 from "../assets/curs-gdpr-2.jpg"

const icons: Record<string, typeof ShieldCheck> = {
  "it-security": ShieldAlert,
  "guvernanta-digitala": Cpu,
  audit: ClipboardCheck,
  consultanta: ShieldCheck,
  "legal-juridic": Scale,
  cursuri: GraduationCap,
}

export default function Home() {
  const locale = useLocale()
  const { expertiseAreas, recommendations, implementationStrategy, courseTiers, specialtyConsultingIntro } = useContent()
  const t = ui[locale].home
  const toLocale = useLocalizedLink()

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-navy-950 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 65%, white 1px, transparent 1px)",
            backgroundSize: "50px 50px, 80px 80px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="eyebrow text-gold-300">{t.heroEyebrow}</p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.1] font-bold mt-2" style={{ fontFamily: "var(--font-display)" }}>
              <span className="text-white block">{t.heroTitleLine1}</span>
              <span className="text-gold-400 block">{t.heroTitleLine2}</span>
            </h1>
            <div className="divider-gold" />
            <p className="text-white/70 max-w-xl leading-relaxed">{t.heroLede}</p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to={toLocale("/audit")} className="btn-gold">
                {t.ctaAudit} <ArrowRight size={16} />
              </Link>
              <Link to={toLocale("/contact")} className="btn-outline">
                {t.ctaContact}
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -inset-3 border border-gold-500/30" />
            <img src={photo1} alt={t.heroImgAlt} className="relative w-full h-72 md:h-96 object-cover shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Expertise grid */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
        <SectionHeading eyebrow={t.expertiseEyebrow} title={t.expertiseTitle} />
        <p className="max-w-3xl mx-auto text-center text-slate-700 leading-relaxed -mt-6 mb-2">{specialtyConsultingIntro}</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {expertiseAreas.map((area) => {
            const Icon = icons[area.slug] ?? ShieldCheck
            return (
              <Link
                key={area.slug}
                to={toLocale(`/${area.slug}`)}
                className="border border-navy-950/10 bg-white px-6 py-8 hover:border-gold-500/60 hover:shadow-md transition-all"
              >
                <Icon className="text-gold-600 mb-4" size={30} strokeWidth={1.5} />
                <h3 className="text-lg text-navy-950 font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  {area.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{area.summary}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-gold-600 mt-4">
                  {t.detailsLabel} <ArrowRight size={13} />
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Recommendations */}
      <section className="bg-paper-100 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading eyebrow={t.recommendationsEyebrow} title={t.recommendationsTitle} center={false} />
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {recommendations.map((r) => (
                <div key={r.title}>
                  <h3 className="font-semibold text-navy-950">{r.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 border border-gold-500/30 hidden md:block" />
            <img src={photo2} alt={t.recommendationsImgAlt} className="relative w-full h-80 object-cover shadow-xl" />
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section className="mx-auto max-w-4xl px-5 md:px-8 py-16 md:py-20">
        <SectionHeading eyebrow={t.strategyEyebrow} title={t.strategyTitle} />
        <div className="mt-10 space-y-8">
          {implementationStrategy.map((s, i) => (
            <div key={s.title} className="flex gap-5">
              <div className="shrink-0 w-9 h-9 rounded-full border border-gold-500/50 text-gold-600 flex items-center justify-center font-bold text-sm tabular">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-semibold text-navy-950">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses preview */}
      <section className="bg-navy-950 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow={t.coursesEyebrow} title={t.coursesTitle} light />
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {courseTiers.map((tier) => (
              <div key={tier.title} className="border border-white/15 px-6 py-8 hover:border-gold-400/60 transition-colors">
                <span className="eyebrow text-gold-300">{tier.label}</span>
                <h3 className="text-lg text-white font-bold mt-2" style={{ fontFamily: "var(--font-display)" }}>
                  {tier.title}
                </h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to={toLocale("/cursuri")} className="btn-gold">
              {t.viewAllCourses} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 text-center bg-paper-50">
        <h2 className="section-title">{t.closingTitle}</h2>
        <div className="mt-8">
          <Link to={toLocale("/contact")} className="btn-navy">
            {t.closingCta} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
