import PageHero from "../components/PageHero"
import SectionHeading from "../components/SectionHeading"
import { courseTiers, courseCurriculum, eventPhotos, sectorTrainingPrograms } from "../data/content"
import { Link } from "react-router-dom"
import photo1 from "../assets/curs-gdpr-1.jpg"
import photo2 from "../assets/curs-gdpr-2.jpg"

const photoMap: Record<string, string> = { "curs-gdpr-1": photo1, "curs-gdpr-2": photo2 }

export default function Cursuri() {
  return (
    <div>
      <PageHero
        eyebrow="Cursuri & Seminarii"
        title="Cursuri și seminarii GDPR — DPO"
        lede="Cursul se adresează persoanelor responsabile în cadrul organizației de a respecta Regulamentul General privind Protecția Datelor."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {courseTiers.map((tier) => (
            <div key={tier.title} className="flex flex-col border border-navy-950/10 bg-white p-6">
              <span className="eyebrow">{tier.label}</span>
              <h3 className="mt-2 text-lg font-bold text-navy-950" style={{ fontFamily: "var(--font-display)" }}>
                {tier.title}
              </h3>
              <p className="tabular mt-1 text-2xl font-bold text-navy-950">{tier.price}</p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {tier.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-navy justify-center mt-6">
                Înscriere
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Advanced sector-specific training */}
      <section className="border-t border-navy-950/10 bg-paper-100">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <SectionHeading
            eyebrow="Formare avansată"
            title="Programe de training adaptate domeniului de activitate"
          />
          <p className="max-w-3xl mx-auto text-center text-slate-700 leading-relaxed -mt-6 mb-2">
            Dincolo de cursul standard, construim programe avansate de training pe măsura fiecărui sector, astfel încât conformitatea să
            fie parte din activitatea zilnică, nu un exercițiu izolat — cu un singur scop: protecția reală a companiei.
          </p>
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
          <SectionHeading eyebrow="Din sălile de curs" title="Sesiuni de formare desfășurate" light />
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
          <SectionHeading eyebrow="Program" title="Structura cursului avansat, pe zile" />
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
