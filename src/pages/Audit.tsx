import PageHero from "../components/PageHero"
import SectionHeading from "../components/SectionHeading"
import NumberedList from "../components/NumberedList"
import { auditStages, dueDiligenceIntro, dueDiligenceAreas } from "../data/content"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const stageItems = auditStages.map((s, i) => ({ title: `Etapa ${i + 1}`, body: s }))

export default function Audit() {
  return (
    <div>
      <PageHero
        eyebrow="Audit & Due Diligence"
        title="Audit de conformitate și due diligence"
        lede="Evaluare practică, dedicată și adaptată specificului fiecărui operator, realizată de colaboratori acreditați cu experiență națională și internațională în securitate, protecția datelor și tranzacții comerciale."
      />
      <section className="mx-auto max-w-3xl px-5 py-16">
        <SectionHeading eyebrow="Tranzacții & Parteneriate" title="Due Diligence" center={false} />
        <p className="mt-4 text-sm leading-relaxed text-slate-700">{dueDiligenceIntro}</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {dueDiligenceAreas.map((d) => (
            <div key={d.title} className="border-l-2 border-gold-500 pl-5">
              <h3 className="text-sm font-semibold text-navy-950">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{d.body}</p>
            </div>
          ))}
        </div>

        <SectionHeading eyebrow="Metodologie" title="Etapele privind implementarea Regulamentului (UE) 2016/679" center={false} className="mt-16" />
        <div className="mt-10">
          <NumberedList items={stageItems} />
        </div>
        <div className="mt-12 bg-navy-950 p-8 text-center">
          <p className="text-sm text-white/80">Ești interesat de oferta noastră pentru audit sau due diligence?</p>
          <Link to="/contact" className="btn-gold mt-4 inline-flex">
            Cerere ofertă <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
