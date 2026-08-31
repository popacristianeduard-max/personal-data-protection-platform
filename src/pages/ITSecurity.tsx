import PageHero from "../components/PageHero"
import SectionHeading from "../components/SectionHeading"
import { cyberSecurityCapabilities, itSecurityDomains, itSecurityBenefits } from "../data/content"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function ITSecurity() {
  return (
    <div>
      <PageHero
        eyebrow="Securitate Cibernetică & AI"
        title="Protecție împotriva amenințărilor digitale"
        lede="Evaluăm, testăm și consolidăm rezistența infrastructurii dumneavoastră în fața amenințărilor cibernetice actuale — de la vulnerabilitățile clasice de infrastructură, la riscurile specifice sistemelor de inteligență artificială."
      />
      <section className="mx-auto max-w-3xl px-5 py-16">
        <SectionHeading eyebrow="Capabilități" title="Ce acoperă practica de securitate cibernetică" center={false} />
        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {cyberSecurityCapabilities.map((d) => (
            <li key={d} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
              {d}
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm leading-relaxed text-slate-700">
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
            Acoperim și guvernanța digitală extinsă — AI Act, Directiva NIS2, standardele ISO/IEC 27001 și managementul integrat al
            riscului.
          </p>
          <Link to="/guvernanta-digitala" className="inline-flex items-center gap-1.5 text-sm font-bold text-gold-600 mt-3">
            Guvernanță Digitală & Risc <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}
