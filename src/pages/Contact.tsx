import { useState } from "react"
import PageHero from "../components/PageHero"
import { contactChannels } from "../data/content"
import { Mail } from "lucide-react"

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const subject = encodeURIComponent(`Cerere de ofertă — ${form.get("name")}`)
    const body = encodeURIComponent(
      `Nume: ${form.get("name")}\nEmail: ${form.get("email")}\nTelefon: ${form.get("phone")}\n\n${form.get("message")}`
    )
    window.location.href = `mailto:office@personaldataprotection.ro?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div>
      <PageHero eyebrow="Contact" title="Contactează-ne" lede="Scrie-ne pentru o cerere de ofertă sau alege direct departamentul potrivit." />
      <section className="mx-auto grid max-w-5xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr]">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Nume *</label>
            <input
              name="name"
              required
              className="mt-1.5 w-full border border-navy-950/15 bg-white px-3.5 py-2.5 text-sm text-navy-950 outline-none focus:border-gold-500"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Email *</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1.5 w-full border border-navy-950/15 bg-white px-3.5 py-2.5 text-sm text-navy-950 outline-none focus:border-gold-500"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Telefon</label>
            <input
              type="tel"
              name="phone"
              className="mt-1.5 w-full border border-navy-950/15 bg-white px-3.5 py-2.5 text-sm text-navy-950 outline-none focus:border-gold-500"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">Mesajul tău *</label>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-1.5 w-full border border-navy-950/15 bg-white px-3.5 py-2.5 text-sm text-navy-950 outline-none focus:border-gold-500"
            />
          </div>
          <button type="submit" className="btn-navy">
            Trimite
          </button>
          {sent && <p className="text-sm text-gold-600">Se deschide clientul tău de email pentru a trimite mesajul.</p>}
        </form>

        <div className="space-y-3">
          <p className="eyebrow">Departamente</p>
          {contactChannels.map((c) => (
            <a
              key={c.email}
              href={`mailto:${c.email}`}
              className="flex items-center gap-3 border border-navy-950/10 bg-white p-4 text-sm hover:border-gold-500/60"
            >
              <Mail className="h-4 w-4 shrink-0 text-gold-600" />
              <span>
                <span className="block font-semibold text-navy-950">{c.label}</span>
                <span className="text-slate-500">{c.email}</span>
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
