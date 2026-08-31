import PageHero from "../components/PageHero"
import SectionHeading from "../components/SectionHeading"
import { eventsHistory, eventPhotos } from "../data/content"
import { CalendarDays } from "lucide-react"
import photo1 from "../assets/curs-gdpr-1.jpg"
import photo2 from "../assets/curs-gdpr-2.jpg"

const photoMap: Record<string, string> = { "curs-gdpr-1": photo1, "curs-gdpr-2": photo2 }

export default function Evenimente() {
  return (
    <div>
      <PageHero
        eyebrow="Evenimente"
        title="Conferințe & workshop-uri"
        lede="O selecție din evenimentele organizate de-a lungul timpului pentru comunitatea de specialiști GDPR și DPO din România."
      />

      <section className="mx-auto max-w-4xl px-5 py-16 space-y-14">
        {eventsHistory.map((ev) => (
          <article key={ev.title} className="border-b border-navy-950/10 pb-14 last:border-0">
            <div className="flex items-center gap-2 text-gold-600">
              <CalendarDays className="h-4 w-4" />
              <span className="eyebrow">{ev.kind}</span>
            </div>
            <h2 className="mt-3 text-2xl font-bold text-navy-950" style={{ fontFamily: "var(--font-display)" }}>
              {ev.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-700">{ev.body}</p>

            {"workshops" in ev && ev.workshops && (
              <div className="mt-8 space-y-6">
                {ev.workshops.map((w) => (
                  <div key={w.title} className="border border-navy-950/10 bg-paper-100 p-5">
                    <h3 className="text-sm font-semibold text-navy-950">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">{w.detail}</p>
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </section>

      {/* Proof gallery — real photos, evidence these sessions actually happened */}
      <section className="bg-navy-950 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="Dovezi" title="Fotografii din sală" light />
          <p className="text-white/60 text-center max-w-xl mx-auto -mt-2 mb-2 text-sm">
            Imagini reale din sesiunile noastre de formare, păstrate din arhiva evenimentelor.
          </p>
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
    </div>
  )
}
