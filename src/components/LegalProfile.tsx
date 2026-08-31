import type { LegalLead } from "../data/types"
import { useLocale } from "../LocaleContext"
import { ui } from "../ui"

export default function LegalProfile({ lead }: { lead: LegalLead }) {
  const locale = useLocale()
  const t = ui[locale].legalProfile
  const initials = lead.name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")

  return (
    <div className="grid md:grid-cols-[220px_1fr] gap-10 items-start">
      <div className="text-center md:text-left">
        <div className="w-28 h-28 mx-auto md:mx-0 rounded-full bg-navy-950 text-gold-400 flex items-center justify-center text-3xl font-bold border-2 border-gold-500/40">
          {initials}
        </div>
        <h3 className="mt-4 text-xl font-bold text-navy-950" style={{ fontFamily: "var(--font-display)" }}>
          {lead.name}
        </h3>
        <p className="text-gold-600 text-sm font-semibold mt-0.5">{lead.title}</p>
        <p className="text-xs text-slate-500 mt-1">{lead.credential}</p>
        <p className="mt-4 text-sm italic text-slate-700">&ldquo;{lead.tagline}&rdquo;</p>
      </div>

      <div>
        <p className="text-slate-700 leading-relaxed">{lead.bio}</p>

        <h4 className="mt-6 text-xs font-bold uppercase tracking-widest text-gold-600">{t.experience}</h4>
        <ul className="mt-3 space-y-2.5">
          {lead.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm leading-relaxed text-slate-700">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        <h4 className="mt-6 text-xs font-bold uppercase tracking-widest text-gold-600">{t.languages}</h4>
        <div className="mt-3 flex flex-wrap gap-2">
          {lead.languages.map((l) => (
            <span key={l} className="border border-navy-950/10 bg-paper-100 px-3 py-1.5 text-xs font-medium text-navy-950/80">
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
