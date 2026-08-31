import PageHero from "../components/PageHero"
import LegalProfile from "../components/LegalProfile"
import { legalLead } from "../data/content"

export default function Echipa() {
  return (
    <div>
      <PageHero
        eyebrow="Echipă"
        title="Consultanță Juridică"
        lede="Consultanță juridică oferită direct, cu experiență practică națională și internațională în drept comercial, insolvență și guvernanță."
      />
      <section className="mx-auto max-w-4xl px-5 py-16">
        <LegalProfile lead={legalLead} />
      </section>
    </div>
  )
}
