import PageHero from "../components/PageHero"
import SectionHeading from "../components/SectionHeading"
import { digitalGovernanceIntro, aiActAreas, nis2Areas, governanceStandards, euResources } from "../data/content"
import { ExternalLink } from "lucide-react"

export default function GuvernantaDigitala() {
  return (
    <div>
      <PageHero
        eyebrow="Guvernanță AI & Risc"
        title="Guvernanță Digitală & Managementul Riscului"
        lede={digitalGovernanceIntro}
      />

      <section className="mx-auto max-w-5xl px-5 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <SectionHeading eyebrow="Inteligență Artificială" title="AI Act" center={false} />
          <ul className="mt-6 space-y-3">
            {aiActAreas.map((a) => (
              <li key={a} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                {a}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeading eyebrow="Securitate Cibernetică" title="NIS2" center={false} />
          <ul className="mt-6 space-y-3">
            {nis2Areas.map((a) => (
              <li key={a} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper-100 py-16">
        <div className="mx-auto max-w-5xl px-5">
          <SectionHeading eyebrow="Standarde" title="Cadrul ISO de guvernanță și risc" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
            {governanceStandards.map((s) => (
              <div key={s.code} className="bg-white border border-navy-950/10 px-5 py-5">
                <p className="font-bold text-navy-950 text-sm tabular">{s.code}</p>
                <p className="text-sm text-slate-500 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <SectionHeading eyebrow="Resurse" title="Repere legislative europene" />
        <p className="mt-4 text-sm text-slate-500 text-center max-w-xl mx-auto leading-relaxed">
          Textele oficiale pe care le monitorizăm și pe care ne întemeiem analiza juridică și tehnică.
        </p>
        <div className="mt-8 space-y-3">
          {euResources.map((r) => (
            <a
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 border border-navy-950/10 bg-white px-5 py-4 text-sm hover:border-gold-500/60 transition-colors"
            >
              <span className="text-navy-950 font-medium">{r.label}</span>
              <ExternalLink size={15} className="shrink-0 text-gold-600" />
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
