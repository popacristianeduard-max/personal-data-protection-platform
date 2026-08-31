import PageHero from "../components/PageHero"
import SectionHeading from "../components/SectionHeading"

const rights = [
  { title: "Dreptul de acces", body: "Poți solicita confirmarea faptului că prelucrăm sau nu date cu caracter personal care te privesc, precum și accesul la acestea." },
  { title: "Dreptul la rectificare", body: "Poți solicita corectarea datelor inexacte sau completarea celor incomplete." },
  { title: "Dreptul la ștergere", body: "Poți solicita ștergerea datelor tale cu caracter personal, în condițiile prevăzute de Regulamentul (UE) 2016/679." },
  { title: "Dreptul la restricționarea prelucrării", body: "Poți solicita restricționarea prelucrării datelor tale, în anumite situații." },
  { title: "Dreptul la portabilitatea datelor", body: "Poți primi datele furnizate într-un format structurat și le poți transmite altui operator." },
  { title: "Dreptul la opoziție", body: "Te poți opune, din motive legate de situația particulară, prelucrării datelor tale cu caracter personal." },
]

export default function Confidentialitate() {
  return (
    <div>
      <PageHero
        eyebrow="Confidențialitate"
        title="Politica de confidențialitate"
        lede="Modul în care Personal Data Protection Group prelucrează datele cu caracter personal ale vizitatorilor acestui site, în conformitate cu Regulamentul (UE) 2016/679 (GDPR)."
      />
      <section className="mx-auto max-w-3xl px-5 py-16">
        <SectionHeading eyebrow="Date" title="Datele pe care le colectăm" center={false} />
        <p className="mt-4 text-sm leading-relaxed text-slate-700">
          Colectăm datele pe care ni le transmiți voluntar prin formularul de contact (nume, email, telefon și conținutul mesajului),
          exclusiv în scopul de a răspunde solicitării tale de informații sau de ofertă. Nu transmitem aceste date către terți, cu
          excepția situațiilor impuse de lege.
        </p>

        <SectionHeading eyebrow="GDPR" title="Drepturile tale" center={false} className="mt-12" />
        <div className="mt-6 space-y-5">
          {rights.map((r) => (
            <div key={r.title}>
              <h3 className="text-sm font-semibold text-navy-950">{r.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-700">{r.body}</p>
            </div>
          ))}
        </div>

        <SectionHeading eyebrow="Contact" title="Cum îți exerciți drepturile" center={false} className="mt-12" />
        <p className="mt-4 text-sm leading-relaxed text-slate-700">
          Pentru orice solicitare privind datele tale cu caracter personal, ne poți scrie la{" "}
          <a href="mailto:office@personaldataprotection.ro" className="font-semibold text-gold-600">
            office@personaldataprotection.ro
          </a>
          . Ai, de asemenea, dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter
          Personal (ANSPDCP).
        </p>
      </section>
    </div>
  )
}
