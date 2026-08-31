import PageHero from "../components/PageHero"
import LegalProfile from "../components/LegalProfile"
import { useLocale, useContent } from "../LocaleContext"
import { ui } from "../ui"

export default function Echipa() {
  const locale = useLocale()
  const { legalLead } = useContent()
  const t = ui[locale].echipa

  return (
    <div>
      <PageHero eyebrow={t.heroEyebrow} title={t.heroTitle} lede={t.heroLede} />
      <section className="mx-auto max-w-4xl px-5 py-16">
        <LegalProfile lead={legalLead} />
      </section>
    </div>
  )
}
