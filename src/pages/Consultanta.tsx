import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import PageHero from "../components/PageHero"
import { consultancyCategories, specialtyConsultingIntro } from "../data/content"

export default function Consultanta() {
  return (
    <div>
      <PageHero
        eyebrow="Consultanță de specialitate"
        title="Conformitate cu Regulamentul (UE) 2016/679"
        lede="Toate serviciile de consultanță oferite de experții noștri au ca scop optimizarea fluxurilor de date prelucrate și asigurarea conformității organizației cu prevederile Regulamentului (UE) 2016/679."
      />
      <section className="mx-auto max-w-5xl px-5 pt-16">
        <p className="text-center text-slate-700 leading-relaxed max-w-3xl mx-auto">{specialtyConsultingIntro}</p>
      </section>
      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {consultancyCategories.map((cat) => (
            <div key={cat.title} className="border border-navy-950/10 bg-white p-6">
              <h3 className="text-base font-bold text-navy-950" style={{ fontFamily: "var(--font-display)" }}>
                {cat.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Link
            to="/guvernanta-digitala"
            className="border border-navy-950/10 bg-paper-100 p-6 hover:border-gold-500/60 transition-colors"
          >
            <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wide">Guvernanță Digitală & Risc</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Extindem consultanța dincolo de datele cu caracter personal: AI Act, Directiva NIS2 și standardele ISO de guvernanță și
              management al riscului.
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-gold-600 mt-4">
              Detalii <ArrowRight size={13} />
            </span>
          </Link>
          <Link to="/cursuri" className="border border-navy-950/10 bg-paper-100 p-6 hover:border-gold-500/60 transition-colors">
            <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wide">Training avansat, pe domenii de activitate</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Programe de formare personalizate pentru HR, IT, sănătate, construcții, retail sau sectorul public, gândite să asigure
              conformitatea și protecția reală a companiei.
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-gold-600 mt-4">
              Vezi programele <ArrowRight size={13} />
            </span>
          </Link>
        </div>
      </section>
    </div>
  )
}
