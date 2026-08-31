import { Link } from "react-router-dom"
import { Mail } from "lucide-react"
import Logo from "./Logo"
import { useLocale, useContent, localizePath } from "../LocaleContext"
import { ui } from "../ui"

const quickPaths = [
  "/it-security",
  "/guvernanta-digitala",
  "/audit",
  "/consultanta",
  "/dpo",
  "/legal-juridic",
  "/cursuri",
  "/evenimente",
  "/confidentialitate",
  "/contact",
]

export default function Footer() {
  const locale = useLocale()
  const { brand, contactChannels } = useContent()
  const t = ui[locale].footer

  const quickLinks = quickPaths.map((path, i) => ({ to: localizePath(path, locale), label: t.links[i] }))

  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <Logo dark />
          <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
            {brand.motto}. {t.aboutSuffix(brand.since)}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold text-gold-300 mb-4 uppercase tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
            {t.navHeader}
          </h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
            {quickLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-white/70 hover:text-gold-300 transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-gold-300 mb-4 uppercase tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
            {t.deptHeader}
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            {contactChannels.map((c) => (
              <li key={c.email} className="flex gap-2 items-start">
                <Mail size={15} className="shrink-0 mt-0.5 text-gold-400" />
                <span>
                  {c.label} —{" "}
                  <a href={`mailto:${c.email}`} className="hover:text-gold-300">
                    {c.email}
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} {brand.name}. {t.copyright}</p>
          <p className="italic text-gold-300/80">{brand.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
