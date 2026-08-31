import PageHero from "../components/PageHero"
import SectionHeading from "../components/SectionHeading"
import { useLocale } from "../LocaleContext"
import { ui } from "../ui"

export default function Confidentialitate() {
  const locale = useLocale()
  const t = ui[locale].confidentialitate

  return (
    <div>
      <PageHero eyebrow={t.heroEyebrow} title={t.heroTitle} lede={t.heroLede} />
      <section className="mx-auto max-w-3xl px-5 py-16">
        <SectionHeading eyebrow={t.dataEyebrow} title={t.dataTitle} center={false} />
        <p className="mt-4 text-sm leading-relaxed text-slate-700">{t.dataBody}</p>

        <SectionHeading eyebrow={t.rightsEyebrow} title={t.rightsTitle} center={false} className="mt-12" />
        <div className="mt-6 space-y-5">
          {t.rights.map((r) => (
            <div key={r.title}>
              <h3 className="text-sm font-semibold text-navy-950">{r.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-700">{r.body}</p>
            </div>
          ))}
        </div>

        <SectionHeading eyebrow={t.contactEyebrow} title={t.contactTitle} center={false} className="mt-12" />
        <p className="mt-4 text-sm leading-relaxed text-slate-700">
          {t.contactBodyPrefix}{" "}
          <a href="mailto:office@personaldataprotection.ro" className="font-semibold text-gold-600">
            office@personaldataprotection.ro
          </a>
          {t.contactBodySuffix}
        </p>
      </section>
    </div>
  )
}
