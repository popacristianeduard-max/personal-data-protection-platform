import { stats } from "../data/content"

export default function StatRow() {
  return (
    <div className="relative border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="tabular text-3xl md:text-4xl font-bold text-gold-400" style={{ fontFamily: "var(--font-display)" }}>
              {s.value}
            </div>
            <div className="text-[11px] md:text-xs uppercase tracking-widest text-white/50 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
