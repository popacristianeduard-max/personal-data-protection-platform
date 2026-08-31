import PageHero from "../components/PageHero"
import SectionHeading from "../components/SectionHeading"
import LegalProfile from "../components/LegalProfile"
import { legalLead, legalIntro, legalAreas, legalDepartments, legalTimeline, legalCredentials } from "../data/content"

export default function LegalJuridic() {
  return (
    <div>
      <PageHero eyebrow="Departamentul Juridic" title="Legal & Juridic" lede={legalIntro} />
      <section className="mx-auto max-w-5xl px-5 py-16">
        <LegalProfile lead={legalLead} />

        <SectionHeading eyebrow="Expertiză" title="Arii de expertiză" center={false} className="mt-16" />
        <div className="mt-6 flex flex-wrap gap-2">
          {legalAreas.map((a) => (
            <span key={a} className="border border-navy-950/10 bg-paper-100 px-3.5 py-1.5 text-xs font-medium text-navy-950/80">
              {a}
            </span>
          ))}
        </div>

        <SectionHeading eyebrow="Structură" title="Departamentul Juridic pe arii de practică" center={false} className="mt-16" />
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-500">
          Coordonat de Ruxandra Costea-Comanici, Departamentul Juridic funcționează alături de Departamentul GDPR și Departamentul IT
          Security ale grupului, organizat pe următoarele arii de practică:
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {legalDepartments.map((p) => (
            <div key={p.title} className="border-l-2 border-gold-500 pl-5">
              <h3 className="text-sm font-semibold text-navy-950">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.body}</p>
            </div>
          ))}
        </div>

        <SectionHeading eyebrow="Traseu profesional" title="25 de ani de experiență la cel mai înalt nivel" center={false} className="mt-16" />
        <div className="mt-8 space-y-6 border-l border-navy-950/10 pl-6">
          {legalTimeline.map((t) => (
            <div key={t.period} className="relative">
              <span className="absolute -left-[27px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold-500" />
              <span className="eyebrow text-gold-600">{t.period}</span>
              <h3 className="mt-1 text-sm font-bold text-navy-950">{t.role}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{t.body}</p>
            </div>
          ))}
        </div>

        <SectionHeading eyebrow="Formare" title="Educație & certificări" center={false} className="mt-16" />
        <ul className="mt-6 space-y-2.5">
          {legalCredentials.map((c) => (
            <li key={c} className="flex gap-3 text-sm leading-relaxed text-slate-700">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
              {c}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
