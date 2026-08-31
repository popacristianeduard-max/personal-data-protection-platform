import { createContext, useContext, useMemo, type ReactNode } from "react"
import { useLocation } from "react-router-dom"
import * as ro from "./data/content"
import * as en from "./data/content.en"

export type Locale = "ro" | "en"

const LocaleContext = createContext<Locale>("ro")

function deriveLocale(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ro"
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const locale = useMemo(() => deriveLocale(pathname), [pathname])
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
}

export function useLocale(): Locale {
  return useContext(LocaleContext)
}

/**
 * Prefixes a canonical (Romanian-rooted) path with /en for the English locale.
 * "/" -> "/en", "/contact" -> "/en/contact". Romanian paths are returned unchanged.
 */
export function localizePath(path: string, locale: Locale): string {
  if (locale === "ro") return path
  return path === "/" ? "/en" : `/en${path}`
}

/**
 * Strips a leading /en prefix from a pathname, returning the canonical Romanian-rooted path.
 * "/en" -> "/", "/en/contact" -> "/contact", "/contact" -> "/contact".
 */
export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/en") return "/"
  if (pathname.startsWith("/en/")) return pathname.slice(3)
  return pathname
}

/** Convenience hook returning a function that localizes a canonical path for the current locale. */
export function useLocalizedLink() {
  const locale = useLocale()
  return (path: string) => localizePath(path, locale)
}

type ContentModule = typeof ro

/** Returns the content data module (content.ts or content.en.ts) matching the current locale. */
export function useContent(): ContentModule {
  const locale = useLocale()
  return (locale === "en" ? en : ro) as ContentModule
}
