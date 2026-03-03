import Link from 'next/link'
import Terminal from '@/components/ui/Terminal'
import RevealWrapper from '@/components/ui/RevealWrapper'

const terminalLines = [
  { cls: 'dim' as const, text: '# Describe your test in plain English' },
  { cls: 'cmd' as const, text: 'perfmonk generate "load test /api/checkout 500 users 3min"' },
  { cls: 'info' as const, text: '⚡ Generating JMeter script...' },
  { cls: 'success' as const, text: '✓ Script created: checkout_load_500vu_3m.jmx' },
  { cls: 'cmd' as const, text: 'perfmonk run checkout_load_500vu_3m.jmx --env prod' },
  { cls: 'info' as const, text: '⏳ Ramping up... 0 → 500 VUs' },
  { cls: 'out' as const, text: '  p50: 38ms   p95: 142ms   p99: 218ms' },
  { cls: 'out' as const, text: '  throughput: 487 req/s   errors: 0.1%' },
  { cls: 'success' as const, text: '✓ Test passed — all thresholds met' },
  { cls: 'cmd' as const, text: 'perfmonk analyze --explain' },
  { cls: 'info' as const, text: '🤖 AI analysis: No bottlenecks detected.' },
  { cls: 'success' as const, text: '  Recommendation: safe to ship.' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center section-padding overflow-hidden pt-28">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#2dd4bf]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <RevealWrapper delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2dd4bf]/20 bg-[#2dd4bf]/[0.05] text-[#2dd4bf] text-xs mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] animate-pulse" />
                AI-Powered Performance Engineering
              </div>
            </RevealWrapper>

            <RevealWrapper delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] tracking-tight text-[#f2f2f2] mb-6">
                Performance testing
                <br />
                <span className="font-serif italic text-[#2dd4bf]">on autopilot.</span>
              </h1>
            </RevealWrapper>

            <RevealWrapper delay={0.2}>
              <p className="text-lg text-[#808080] leading-relaxed mb-8 max-w-lg">
                PerfMonk automates your entire performance testing lifecycle with AI agents — from
                script generation to analysis. Works as a full platform or as a bot inside Slack,
                Teams, and Mattermost.
              </p>
            </RevealWrapper>

            <RevealWrapper delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contactus?demo=true"
                  className="px-6 py-3 bg-[#2dd4bf] text-[#0c0c0c] font-semibold rounded-lg hover:bg-[#2dd4bf]/90 transition-colors text-center"
                >
                  Book a demo
                </Link>
                <Link
                  href="/pricing"
                  className="px-6 py-3 border border-white/[0.11] text-[#f2f2f2] rounded-lg hover:bg-white/[0.07] transition-colors text-center"
                >
                  See pricing
                </Link>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={0.4}>
              <p className="mt-6 text-xs text-[#404040]">
                No credit card required · 14-day free trial · SOC2 compliant
              </p>
            </RevealWrapper>
          </div>

          {/* Right — Terminal */}
          <RevealWrapper delay={0.2}>
            <Terminal lines={terminalLines} speed={280} />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
