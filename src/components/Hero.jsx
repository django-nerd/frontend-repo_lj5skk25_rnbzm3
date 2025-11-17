import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 pt-28 pb-24 md:pt-32 md:pb-28">
        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full opacity-40 blur-3xl bg-[radial-gradient(closest-side,rgba(168,85,247,0.25),transparent)]" />
          <div className="absolute top-1/2 left-1/4 h-[500px] w-[500px] -translate-y-1/2 rounded-full opacity-30 blur-3xl bg-[radial-gradient(closest-side,rgba(99,102,241,0.25),transparent)]" />
          <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] translate-y-1/3 rounded-full opacity-30 blur-3xl bg-[radial-gradient(closest-side,rgba(14,165,233,0.25),transparent)]" />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/80 ring-1 ring-white/15 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              <span>AI voice agents • Dashboards • iOS apps</span>
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
              AI Development Company
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              Custom AI development: AI voice agents that save $2,500/month, real-time analytics dashboards, and iOS apps. Cut costs 60%, launch 30% faster, automate 40 hours/week.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 font-semibold px-5 py-3 shadow-lg shadow-white/10 hover:shadow-white/20 transition-all">
                Book a discovery call
              </a>
              <a href="#work" className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-5 py-3 hover:bg-white/10 transition-colors">
                See recent work
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/70 text-xs">
              <div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 backdrop-blur-md">
                <p className="font-semibold text-white">$2,500/mo</p>
                <p>Savings per voice agent</p>
              </div>
              <div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 backdrop-blur-md">
                <p className="font-semibold text-white">30% faster</p>
                <p>From idea to launch</p>
              </div>
              <div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 backdrop-blur-md">
                <p className="font-semibold text-white">60% lower</p>
                <p>Development costs</p>
              </div>
              <div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 backdrop-blur-md">
                <p className="font-semibold text-white">40 hrs/week</p>
                <p>Automation per team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
