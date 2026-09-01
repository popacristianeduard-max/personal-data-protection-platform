import { useEffect, useState } from "react"
import { NavLink, Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import Logo from "./Logo"
import { useLocale, localizePath, stripLocalePrefix } from "../LocaleContext"
import { ui } from "../ui"

const navPaths = [
  "/servicii",
  "/it-security",
  "/guvernanta-digitala",
  "/managementul-riscurilor",
  "/audit",
  "/consultanta",
  "/dpo",
  "/legal-juridic",
  "/cursuri",
  "/evenimente",
  "/echipa",
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const locale = useLocale()
  const location = useLocation()
  const t = ui[locale].nav

  const navLinks = navPaths.map((path, i) => ({ to: localizePath(path, locale), label: t.links[i] }))
  const otherLocale = locale === "ro" ? "en" : "ro"
  const basePath = stripLocalePrefix(location.pathname)
  const switchHref = localizePath(basePath, otherLocale)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-colors ${scrolled ? "bg-navy-950/97 shadow-lg" : "bg-navy-950"}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-center justify-between py-2.5">
          <Link to={localizePath("/", locale)} onClick={() => setOpen(false)} className="shrink-0">
            <Logo dark />
          </Link>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to={switchHref}
              className="hidden sm:inline-flex text-[11px] font-semibold tracking-wide text-white/70 hover:text-gold-300 transition-colors"
              aria-label={locale === "ro" ? t.switchToEn : t.switchToRo}
            >
              <span className={locale === "ro" ? "text-gold-300" : ""}>RO</span>
              <span className="mx-1 text-white/30">|</span>
              <span className={locale === "en" ? "text-gold-300" : ""}>EN</span>
            </Link>

            <Link to={localizePath("/contact", locale)} className="hidden lg:inline-flex btn-gold !py-2 !px-5 !text-[11px]">
              {t.quote}
            </Link>

            <button className="lg:hidden text-white p-2" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <nav className="hidden lg:flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-white/10 py-2.5">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `whitespace-nowrap text-[11px] tracking-[0.08em] uppercase font-semibold transition-colors border-b pb-0.5 ${
                  isActive ? "text-gold-400 border-gold-400" : "text-white/85 border-transparent hover:text-gold-300"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {open && (
        <div className="lg:hidden bg-navy-950 border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2.5 text-sm tracking-wide uppercase border-b border-white/5 ${isActive ? "text-gold-400" : "text-white/85"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to={switchHref}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm tracking-wide uppercase border-b border-white/5 text-white/85"
            >
              <span className={locale === "ro" ? "text-gold-400" : ""}>RO</span>
              <span className="mx-1.5 text-white/30">|</span>
              <span className={locale === "en" ? "text-gold-400" : ""}>EN</span>
            </Link>
            <Link to={localizePath("/contact", locale)} onClick={() => setOpen(false)} className="btn-gold justify-center mt-3">
              {t.quote}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
