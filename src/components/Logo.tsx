function Mark() {
  return (
    <svg width="34" height="34" viewBox="0 0 64 64" className="shrink-0">
      <rect width="64" height="64" rx="14" fill="#0a0d16" />
      <path
        d="M32 12 L48 18 V30 C48 41 41.5 48.5 32 52 C22.5 48.5 16 41 16 30 V18 Z"
        fill="none"
        stroke="#c9972e"
        strokeWidth="2.5"
      />
      <path d="M24 31 L29.5 37 L41 24" fill="none" stroke="#dab35a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Logo({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <Mark />
      <div className="leading-tight min-w-0">
        <div
          className={`font-bold tracking-wide ${compact ? "text-sm md:text-base whitespace-nowrap" : "text-base md:text-lg leading-snug"} ${
            dark ? "text-white" : "text-navy-950"
          }`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          PERSONAL DATA PROTECTION
        </div>
        {!compact && (
          <div className={`text-[9px] md:text-[10px] tracking-[0.15em] uppercase ${dark ? "text-gold-300" : "text-gold-600"}`}>
            GDPR · LEGAL · IT SECURITY
          </div>
        )}
      </div>
    </div>
  )
}
