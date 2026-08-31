import PageHero from "../components/PageHero"
import SectionHeading from "../components/SectionHeading"
import NumberedList from "../components/NumberedList"
import { auditStages } from "../data/content"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const stageItems = auditStages.map((s, i) => ({ title: `Etapa ${i + 1}`, body: s }))

export default function Audit() {
  return (
    <div>
      <PageHero
        eyebrow="Audit GDPR"
        title="Audit / evaluare a gradului de conformitate"
        lede="Evaluare practică, dedicată și adaptată specificului fiecărui operator, realizată de colaboratori acreditați cu experiență națională și internațională în domeniul datelor personale."
      />
      <section className="mx-auto max-w-3xl px-5 py-16">
        <SectionHeading eyebrow="Metodologie" title="Etapele privind implementarea Regulamentului (UE) 2016/679" center={false} />
        <div className="mt-10">
          <NumberedList items={stageItems} />
        </div>
        <div className="mt-12 bg-navy-950 p-8 text-center">
          <p className="text-sm text-white/80">Ești interesat de oferta noastră pentru audit?</p>
          <Link to="/contact" className="btn-gold mt-4 inline-flex">
            Cerere ofertă <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
