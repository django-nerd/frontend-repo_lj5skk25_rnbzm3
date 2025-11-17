import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-purple-500 via-blue-500 to-cyan-400 shadow-lg ring-1 ring-white/10" />
          <span className="text-white text-lg font-semibold tracking-tight">AI Development Co.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#stats" className="hover:text-white transition-colors">Results</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#cta" className="hover:text-white transition-colors">Contact</a>
          <a href="#cta" className="ml-2 inline-flex items-center rounded-lg bg-white/10 hover:bg-white/15 text-white px-4 py-2 backdrop-blur-sm border border-white/10 transition-colors">Book a call</a>
        </nav>
        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/10 text-white">
          <Menu size={18} />
        </button>
      </div>
    </header>
  )
}

export default Navbar
