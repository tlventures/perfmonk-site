import type { Metadata } from 'next'
import PricingToggle from '@/components/ui/PricingToggle'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for every team size. Start free — no credit card required.',
}

const comparisonRows = [
  { feature: 'AI script generation', platform: true, engine: false },
  { feature: 'Distributed load execution', platform: true, engine: false },
  { feature: 'Real-time dashboards', platform: true, engine: false },
  { feature: 'CI/CD integration', platform: true, engine: false },
  { feature: 'PDF compliance reports', platform: true, engine: false },
  { feature: 'Slack / Teams bot', platform: true, engine: true },
  { feature: 'Chat-based test triggers', platform: false, engine: true },
  { feature: 'AI diagnosis in thread', platform: false, engine: true },
  { feature: 'Smart anomaly alerts', platform: true, engine: true },
  { feature: 'Team collaboration', platform: true, engine: true },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-28">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-3">Pricing</p>
          <h1 className="text-3xl md:text-5xl font-semibold text-[#f2f2f2] mb-4">
            Simple, transparent pricing.
          </h1>
          <p className="text-[#808080] max-w-lg mx-auto">
            Every plan includes a 14-day trial of the full feature set. No credit card required.
          </p>
        </div>

        {/* Pricing toggle */}
        <PricingToggle />

        {/* Annual discount note */}
        <p className="text-center text-sm text-[#808080] mt-8 mb-20">
          All prices in USD. Annual billing saves 20%.{' '}
          <a href="mailto:perfmonk@perfmonk.in" className="text-[#2dd4bf] hover:underline">
            Contact us
          </a>{' '}
          for custom enterprise quotes.
        </p>

        {/* Feature comparison */}
        <div>
          <h2 className="text-2xl font-semibold text-[#f2f2f2] mb-8 text-center">
            Platform vs Engine — at a glance
          </h2>
          <div className="rounded-xl border border-white/[0.07] overflow-hidden">
            <div className="grid grid-cols-3 bg-[#151515] px-6 py-3 border-b border-white/[0.07]">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#404040]">Feature</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#2dd4bf] text-center">Platform</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#d4a843] text-center">Engine</span>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 px-6 py-3 ${i % 2 === 0 ? 'bg-[#101010]' : 'bg-[#0c0c0c]'}`}
              >
                <span className="text-sm text-[#cccccc]">{row.feature}</span>
                <span className="flex justify-center">
                  {row.platform ? (
                    <Check className="w-4 h-4 text-[#2dd4bf]" />
                  ) : (
                    <span className="text-[#404040] text-lg leading-none">—</span>
                  )}
                </span>
                <span className="flex justify-center">
                  {row.engine ? (
                    <Check className="w-4 h-4 text-[#d4a843]" />
                  ) : (
                    <span className="text-[#404040] text-lg leading-none">—</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-[#808080] mb-4">Still have questions about which plan is right for you?</p>
          <a
            href="mailto:perfmonk@perfmonk.in?subject=Pricing%20Question"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2dd4bf] text-[#0c0c0c] font-semibold rounded-lg hover:bg-[#2dd4bf]/90 transition-colors"
          >
            Talk to us
          </a>
        </div>
      </div>
    </div>
  )
}
