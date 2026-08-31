import { useEffect, useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import Logo from "./Logo"

const navLinks = [
  { to: "/it-security", label: "Securitate Cibernetică" },
  { to: "/guvernanta-digitala", label: "Guvernanță AI & Risc" },
  { to: "/audit", label: "Audit & Due Diligence" },
  { to: "/consultanta", label: "Consultanță GDPR" },
  { to: "/dpo", label: "DPO" },
  { to: "/legal-juridic", label: "Juridic" },
  { to: "/cursuri", label: "Formare (LLL)" },
  { to: "/evenimente", label: "Evenimente" },
  { to: "/echipa", label: "Echipă" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
          <Link to="/" onClick={() => setOpen(false)} className="shrink-0">
            <Logo dark />
          </Link>

          <div className="flex items-center gap-3 shrink-0">
            <Link to="/contact" className="hidden lg:inline-flex btn-gold !py-2 !px-5 !text-[11px]">
              Cere ofertă
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
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-gold justify-center mt-3">
              Cere ofertă
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
