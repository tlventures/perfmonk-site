import RevealWrapper from '@/components/ui/RevealWrapper'
import { platformFeatures } from '@/lib/constants/features'
import { Zap, LineChart, GitBranch, Cloud, BarChart3, Shield } from 'lucide-react'
import Link from 'next/link'

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap, LineChart, GitBranch, Cloud, BarChart3, Shield,
}

export default function Platform() {
  return (
    <section id="platform" className="section-padding bg-[#0c0c0c]">
      <div className="container-max">
        <RevealWrapper>
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2dd4bf]/20 bg-[#2dd4bf]/[0.05] text-[#2dd4bf] text-xs mb-4">
              🖥 Platform
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#f2f2f2] mb-4">
              Everything you need to ship
              <br />
              <span className="font-serif italic text-[#2dd4bf]">confidently fast.</span>
            </h2>
            <p className="text-[#808080] max-w-lg">
              The PerfMonk platform gives your team a complete performance engineering command
              centre — from test creation to compliance reporting.
            </p>
          </div>
        </RevealWrapper>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {platformFeatures.map((f, i) => {
            const Icon = icons[f.icon]
            return (
              <RevealWrapper key={f.title} delay={i * 0.06}>
                <div className="card-base h-full flex flex-col gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#2dd4bf]/10 border border-[#2dd4bf]/20 flex items-center justify-center">
                    {Icon && <Icon className="w-4 h-4 text-[#2dd4bf]" />}
                  </div>
                  <p className="font-medium text-[#f2f2f2]">{f.title}</p>
                  <p className="text-sm text-[#808080] leading-relaxed">{f.description}</p>
                </div>
              </RevealWrapper>
            )
          })}
        </div>

        <RevealWrapper delay={0.2}>
          <div className="flex gap-4">
            <Link
              href="/contactus?demo=true"
              className="px-5 py-2.5 bg-[#2dd4bf] text-[#0c0c0c] font-semibold rounded-lg hover:bg-[#2dd4bf]/90 transition-colors text-sm"
            >
              Book a platform demo
            </Link>
            <Link
              href="/pricing"
              className="px-5 py-2.5 border border-white/[0.11] text-[#f2f2f2] rounded-lg hover:bg-white/[0.07] transition-colors text-sm"
            >
              View platform pricing
            </Link>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
