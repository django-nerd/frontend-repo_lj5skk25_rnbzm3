import { Bot, BarChart3, Smartphone } from 'lucide-react'

function Services() {
  const items = [
    {
      icon: <Bot className="h-5 w-5" />, 
      title: 'AI Voice Agents',
      desc: 'Natural, on-brand voice agents that handle inbound calls, booking, qualification, and support. Proven to save $2,500/month per agent.'
    },
    {
      icon: <BarChart3 className="h-5 w-5" />, 
      title: 'Real-time Dashboards',
      desc: 'Operational analytics with streaming events, funnel breakdowns, and alerting. Built for clarity and speed.'
    },
    {
      icon: <Smartphone className="h-5 w-5" />, 
      title: 'iOS Apps',
      desc: 'Swift/SwiftUI apps with on-device ML where it matters: fast, secure, and designed for conversion.'
    }
  ]

  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 text-white/80 backdrop-blur-md">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/10 text-white mb-4">
                {item.icon}
              </div>
              <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
