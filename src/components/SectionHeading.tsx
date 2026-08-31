type Props = {
  eyebrow?: string
  title: string
  center?: boolean
  light?: boolean
  className?: string
}

export default function SectionHeading({ eyebrow, title, center = true, light = false, className = "" }: Props) {
  return (
    <div className={`${center ? "text-center" : ""} ${className}`}>
      {eyebrow && <p className={`eyebrow ${light ? "text-gold-300" : ""}`}>{eyebrow}</p>}
      <h2 className={`section-title ${light ? "text-white" : ""}`}>{title}</h2>
      <div className={center ? "divider-gold-center" : "divider-gold"} />
    </div>
  )
}
