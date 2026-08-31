import PageHero from "../components/PageHero"
import SectionHeading from "../components/SectionHeading"
import { Link } from "react-router-dom"
import { useLocale, useContent, useLocalizedLink } from "../LocaleContext"
import { ui } from "../ui"
import photo1 from "../assets/curs-gdpr-1.jpg"
import photo2 from "../assets/curs-gdpr-2.jpg"

const photoMap: Record<string, string> = { "curs-gdpr-1": photo1, "curs-gdpr-2": photo2 }

export default function Cursuri() {
  const locale = useLocale()
  const { courseTiers, courseCurriculum, eventPhotos, sectorTrainingPrograms, courseTracks, lifelongLearningIntro } = useContent()
  const t = ui[locale].cursuri
  const toLocale = useLocalizedLink()

  return (
    <div>
      <PageHero eyebrow={t.heroEyebrow} title={t.heroTitle} lede={t.heroLede} />

      <section className="mx-auto max-w-6xl px-5 pt-16">
        <SectionHeading eyebrow={t.modelEyebrow} title={t.modelTitle} />
        <p className="max-w-3xl mx-auto text-center text-slate-700 leading-relaxed -mt-6 mb-2">{lifelongLearningIntro}</p>
        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          {courseTracks.map((tr) => (
            <div key={tr.title} className="border border-navy-950/10 bg-white p-6">
              <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wide">{tr.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-700">{tr.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading eyebrow={t.trackEyebrow} title={t.trackTitle} className="mb-2" />
        <div className="grid gap-6 lg:grid-cols-3 mt-10">
          {courseTiers.map((tier) => (
            <div key={tier.title} className="flex flex-col border border-navy-950/10 bg-white p-6">
              <span className="eyebrow">{tier.label}</span>
              <h3 className="mt-2 text-lg font-bold text-navy-950" style={{ fontFamily: "var(--font-display)" }}>
                {tier.title}
              </h3>
              <ul className="mt-5 flex-1 space-y-2.5">
                {tier.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to={toLocale("/contact")} className="btn-navy justify-center mt-6">
                {t.enrollLabel}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Advanced sector-specific training */}
      <section className="border-t border-navy-950/10 bg-paper-100">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <SectionHeading eyebrow={t.advancedEyebrow} title={t.advancedTitle} />
          <p className="max-w-3xl mx-auto text-center text-slate-700 leading-relaxed -mt-6 mb-2">{t.advancedBody}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {sectorTrainingPrograms.map((p) => (
              <div key={p.sector} className="border border-navy-950/10 bg-white p-6">
                <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wide">{p.sector}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-700">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof gallery — real photos from past sessions */}
      <section className="bg-navy-950 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow={t.galleryEyebrow} title={t.galleryTitle} light />
          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            {eventPhotos.map((p) => (
              <figure key={p.file} className="relative">
                <div className="absolute -inset-2 border border-gold-500/30 hidden sm:block" />
                <img src={photoMap[p.file]} alt={p.caption} className="relative w-full h-64 object-cover shadow-xl" />
                <figcaption className="mt-3 text-xs text-white/60 text-center">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-navy-950/10 bg-paper-100">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <SectionHeading eyebrow={t.programEyebrow} title={t.programTitle} />
          <div className="mt-8 space-y-10">
            {courseCurriculum.map((day) => (
              <div key={day.day}>
                <h3 className="eyebrow">{day.day}</h3>
                <div className="mt-4 space-y-5">
                  {day.sections.map((s) => (
                    <div key={s.title}>
                      <p className="text-sm font-semibold text-navy-950">{s.title}</p>
                      <ul className="mt-2 space-y-1.5">
                        {s.points.map((pt) => (
                          <li key={pt} className="text-sm leading-relaxed text-slate-700">— {pt}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
