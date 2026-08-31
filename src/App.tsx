import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Consultanta from "./pages/Consultanta"
import Audit from "./pages/Audit"
import DPO from "./pages/DPO"
import LegalJuridic from "./pages/LegalJuridic"
import ITSecurity from "./pages/ITSecurity"
import Cursuri from "./pages/Cursuri"
import Evenimente from "./pages/Evenimente"
import Echipa from "./pages/Echipa"
import Contact from "./pages/Contact"
import Confidentialitate from "./pages/Confidentialitate"
import GuvernantaDigitala from "./pages/GuvernantaDigitala"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-paper-50">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consultanta" element={<Consultanta />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/dpo" element={<DPO />} />
          <Route path="/legal-juridic" element={<LegalJuridic />} />
          <Route path="/it-security" element={<ITSecurity />} />
          <Route path="/cursuri" element={<Cursuri />} />
          <Route path="/evenimente" element={<Evenimente />} />
          <Route path="/guvernanta-digitala" element={<GuvernantaDigitala />} />
          <Route path="/echipa" element={<Echipa />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/confidentialitate" element={<Confidentialitate />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
