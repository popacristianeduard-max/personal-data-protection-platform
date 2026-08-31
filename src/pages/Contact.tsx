import { useState } from "react"
import PageHero from "../components/PageHero"
import { Mail } from "lucide-react"
import { useLocale, useContent } from "../LocaleContext"
import { ui } from "../ui"

export default function Contact() {
  const [sent, setSent] = useState(false)
  const locale = useLocale()
  const { contactChannels } = useContent()
  const t = ui[locale].contact

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const subject = encodeURIComponent(`${t.mailSubjectPrefix} — ${form.get("name")}`)
    const body = encodeURIComponent(
      `${t.mailNameLabel}: ${form.get("name")}\n${t.mailEmailLabel}: ${form.get("email")}\n${t.mailPhoneLabel}: ${form.get(
        "phone"
      )}\n\n${form.get("message")}`
    )
    window.location.href = `mailto:office@personaldataprotection.ro?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div>
      <PageHero eyebrow={t.heroEyebrow} title={t.heroTitle} lede={t.heroLede} />
      <section className="mx-auto grid max-w-5xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr]">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t.nameLabel}</label>
            <input
              name="name"
              required
              className="mt-1.5 w-full border border-navy-950/15 bg-white px-3.5 py-2.5 text-sm text-navy-950 outline-none focus:border-gold-500"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t.emailLabel}</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1.5 w-full border border-navy-950/15 bg-white px-3.5 py-2.5 text-sm text-navy-950 outline-none focus:border-gold-500"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t.phoneLabel}</label>
            <input
              type="tel"
              name="phone"
              className="mt-1.5 w-full border border-navy-950/15 bg-white px-3.5 py-2.5 text-sm text-navy-950 outline-none focus:border-gold-500"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t.messageLabel}</label>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-1.5 w-full border border-navy-950/15 bg-white px-3.5 py-2.5 text-sm text-navy-950 outline-none focus:border-gold-500"
            />
          </div>
          <button type="submit" className="btn-navy">
            {t.submitLabel}
          </button>
          {sent && <p className="text-sm text-gold-600">{t.sentNotice}</p>}
        </form>

        <div className="space-y-3">
          <p className="eyebrow">{t.departmentsLabel}</p>
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
