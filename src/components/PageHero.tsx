type Props = {
  eyebrow: string
  title: string
  lede?: string
}

export default function PageHero({ eyebrow, title, lede }: Props) {
  return (
    <div className="relative bg-navy-950 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 60% 70%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px, 90px 90px",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-5 md:px-8 py-16 md:py-20 text-center">
        <p className="eyebrow text-gold-300">{eyebrow}</p>
        <h1 className="text-3xl md:text-5xl text-white font-bold mt-2" style={{ fontFamily: "var(--font-display)" }}>
          {title}
        </h1>
        <div className="divider-gold-center" />
        {lede && <p className="text-white/70 max-w-2xl mx-auto mt-2 leading-relaxed">{lede}</p>}
      </div>
    </div>
  )
}
