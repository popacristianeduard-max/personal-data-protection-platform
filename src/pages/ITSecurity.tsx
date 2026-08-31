import PageHero from "../components/PageHero"
import SectionHeading from "../components/SectionHeading"
import { itSecurityDomains, itSecurityBenefits } from "../data/content"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function ITSecurity() {
  return (
    <div>
      <PageHero
        eyebrow="Consultanță IT"
        title="Securitate IT & infrastructură"
        lede="Vasta experiență în domeniul IT, competențele și certificările tehnice deținute de membrii echipei noastre ne permit să oferim cele mai bune soluții pentru ameliorarea și eficientizarea activității companiei dumneavoastră."
      />
      <section className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm leading-relaxed text-slate-700">
          Scopul unui audit intern este acela de a determina punctele nevralgice ale infrastructurii IT, de a găsi soluțiile optime la
          nevoile existente și de a elabora procedurile de lucru corecte pentru personalul implicat — rezultând într-o strategie durabilă
          de dezvoltare, cu costuri și eforturi minime.
        </p>

        <SectionHeading eyebrow="Acoperire" title="Contractele de consultanță acoperă" center={false} className="mt-12" />
        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {itSecurityDomains.map((d) => (
            <li key={d} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
              {d}
            </li>
          ))}
        </ul>

        <SectionHeading eyebrow="Rezultat" title="Beneficii" center={false} className="mt-12" />
        <ul className="mt-6 space-y-2.5">
          {itSecurityBenefits.map((b) => (
            <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-12 bg-paper-100 border border-navy-950/10 p-6">
          <p className="text-sm text-slate-700">
            Acoperim și securitatea cibernetică extinsă — Directiva NIS2, standardele ISO/IEC 27001 și managementul integrat al riscului.
          </p>
          <Link to="/guvernanta-digitala" className="inline-flex items-center gap-1.5 text-sm font-bold text-gold-600 mt-3">
            Guvernanță Digitală & Risc <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}
