import PageHero from "../components/PageHero"
import SectionHeading from "../components/SectionHeading"
import { dpoDescription } from "../data/content"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function DPO() {
  return (
    <div>
      <PageHero eyebrow="Data Protection Officer" title="Responsabilul cu Protecția Datelor" lede={dpoDescription.intro} />
      <section className="mx-auto max-w-3xl px-5 py-16">
        <SectionHeading eyebrow="Independență" title="Garanții de independență" center={false} />
        <ul className="mt-6 space-y-3">
          {dpoDescription.guarantees.map((g) => (
            <li key={g} className="flex gap-3 text-sm leading-relaxed text-slate-700">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
              {g}
            </li>
          ))}
        </ul>

        <SectionHeading eyebrow="Responsabilități" title="Sarcinile responsabilului cu protecția datelor" center={false} className="mt-14" />
        <ul className="mt-6 space-y-3">
          {dpoDescription.duties.map((d) => (
            <li key={d} className="flex gap-3 text-sm leading-relaxed text-slate-700">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
              {d}
            </li>
          ))}
        </ul>

        <div className="mt-12 bg-navy-950 p-8 text-center">
          <p className="text-sm text-white/80">DPO intern sau extern? Vă stăm la dispoziție.</p>
          <Link to="/contact" className="btn-gold mt-4 inline-flex">
            Contactează-ne <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
