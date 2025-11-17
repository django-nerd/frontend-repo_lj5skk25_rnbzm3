function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-10 backdrop-blur-md">
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Ready to cut costs and ship faster?</h2>
          <p className="mt-3 text-white/80">Book a 30-minute discovery call. Well map your ROI, timeline, and deliverables.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="mailto:hello@example.com" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 font-semibold px-5 py-3 shadow-lg shadow-white/10 hover:shadow-white/20 transition-all">Email us</a>
            <a href="https://cal.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-5 py-3 hover:bg-white/10 transition-colors">Book on Cal.com</a>
          </div>
          <p className="mt-4 text-xs text-white/60">Avg. kickoff: 7 days • Typical build: 312 weeks</p>
        </div>
      </div>
    </section>
  )
}

export default CTA
