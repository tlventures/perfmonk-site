import RevealWrapper from '@/components/ui/RevealWrapper'
import Link from 'next/link'
import { Monitor, MessageSquare } from 'lucide-react'

export default function Solution() {
  return (
    <section className="section-padding bg-[#101010] border-y border-white/[0.07]">
      <div className="container-max">
        <RevealWrapper>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-3">
              The solution
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#f2f2f2] mb-4">
              Two ways to use PerfMonk
            </h2>
            <p className="text-[#808080] max-w-xl mx-auto">
              Whether you prefer a full web platform or tests that run from inside your chat tools,
              PerfMonk has you covered.
            </p>
          </div>
        </RevealWrapper>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Platform */}
          <RevealWrapper delay={0.1}>
            <div className="rounded-xl border border-[#2dd4bf]/20 bg-[#151515] p-8 flex flex-col gap-5 teal-glow">
              <div className="w-12 h-12 rounded-xl bg-[#2dd4bf]/10 border border-[#2dd4bf]/20 flex items-center justify-center">
                <Monitor className="w-6 h-6 text-[#2dd4bf]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#f2f2f2] mb-2">🖥 The Platform</h3>
                <p className="text-[#808080] leading-relaxed">
                  A full-featured web app where you write tests in English, run them at scale,
                  view live dashboards, and get AI-generated reports — all in one place.
                </p>
              </div>
              <ul className="space-y-2">
                {['AI script generation', 'Global distributed load', 'Live dashboards & reports', 'CI/CD pipeline integration'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#cccccc]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf]" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/#platform"
                className="mt-auto text-sm text-[#2dd4bf] hover:underline"
              >
                Explore the Platform →
              </Link>
            </div>
          </RevealWrapper>

          {/* Engine */}
          <RevealWrapper delay={0.2}>
            <div className="rounded-xl border border-[#d4a843]/20 bg-[#151515] p-8 flex flex-col gap-5 eng-glow">
              <div className="w-12 h-12 rounded-xl bg-[#d4a843]/10 border border-[#d4a843]/20 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-[#d4a843]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#f2f2f2] mb-2">💬 The Engine</h3>
                <p className="text-[#808080] leading-relaxed">
                  An AI bot that lives inside Slack, Teams, or Mattermost. Trigger tests, get
                  results, and ask questions — all without leaving your team&apos;s chat.
                </p>
              </div>
              <ul className="space-y-2">
                {['Chat-first test triggering', 'AI diagnosis in thread', 'Smart anomaly alerts', 'Slack, Teams & Mattermost'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#cccccc]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4a843]" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/#engine"
                className="mt-auto text-sm text-[#d4a843] hover:underline"
              >
                Explore the Engine →
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
