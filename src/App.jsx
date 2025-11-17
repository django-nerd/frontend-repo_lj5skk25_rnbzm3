import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="relative">
        {/* Background gradient base */}
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(88,28,135,0.20)_0%,rgba(2,6,23,0.6)_50%,rgba(2,6,23,1)_100%)]" />

        <Navbar />
        <Hero />
        <Services />
        <CTA />

        {/* subtle bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>
    </div>
  )
}

export default App
