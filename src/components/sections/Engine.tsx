import RevealWrapper from '@/components/ui/RevealWrapper'
import { engineFeatures } from '@/lib/constants/features'
import { MessageSquare, Brain, Bell, Users } from 'lucide-react'
import SlackMock from '@/components/ui/SlackMock'
import Link from 'next/link'

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquare, Brain, Bell, Users,
}

export default function Engine() {
  return (
    <section id="engine" className="section-padding bg-[#101010] border-y border-white/[0.07]">
      <div className="container-max">
        {/* Coming Soon banner */}
        <div className="mb-10 flex items-center gap-3 px-5 py-3 rounded-xl border border-[#d4a843]/25 bg-[#d4a843]/[0.04]">
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#d4a843]/10 border border-[#d4a843]/30 text-[#d4a843] rounded-full flex-shrink-0">
            Coming Soon
          </span>
          <p className="text-sm text-[#808080]">
            The Engine bot is in active development.{' '}
            <Link href="/contactus" className="text-[#d4a843] hover:underline">
              Join the early access list
            </Link>{' '}
            and be first to know when it launches.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start opacity-75">
          {/* Left */}
          <div>
            <RevealWrapper>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4a843]/20 bg-[#d4a843]/[0.05] text-[#d4a843] text-xs mb-4">
                💬 Engine
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#f2f2f2] mb-4">
                Performance testing,
                <br />
                <span className="font-serif italic text-[#d4a843]">inside your chat.</span>
              </h2>
              <p className="text-[#808080] mb-8 leading-relaxed">
                The PerfMonk Engine bot will turn Slack, Teams, and Mattermost into a performance
                engineering hub. Trigger tests, get live updates, and interrogate results — all in
                a thread.
              </p>
            </RevealWrapper>

            <div className="space-y-4 mb-8">
              {engineFeatures.map((f, i) => {
                const Icon = icons[f.icon]
                return (
                  <RevealWrapper key={f.title} delay={i * 0.08}>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#d4a843]/10 border border-[#d4a843]/20 flex items-center justify-center">
                        {Icon && <Icon className="w-4 h-4 text-[#d4a843]" />}
                      </div>
                      <div>
                        <p className="font-medium text-[#f2f2f2] mb-0.5">{f.title}</p>
                        <p className="text-sm text-[#808080]">{f.description}</p>
                      </div>
                    </div>
                  </RevealWrapper>
                )
              })}
            </div>

            <RevealWrapper delay={0.3}>
              <Link
                href="/contactus"
                className="inline-flex px-5 py-2.5 border border-[#d4a843]/30 text-[#d4a843] rounded-lg hover:bg-[#d4a843]/10 transition-colors text-sm font-medium"
              >
                Get early access →
              </Link>
            </RevealWrapper>
          </div>

          {/* Right — Slack mock preview */}
          <RevealWrapper delay={0.2}>
            <div className="relative">
              <SlackMock />
              {/* Frosted overlay to indicate not-yet-live */}
              <div className="absolute inset-0 rounded-xl bg-[#101010]/40 backdrop-blur-[1px] flex items-center justify-center">
                <span className="px-4 py-2 rounded-full border border-[#d4a843]/40 bg-[#101010]/80 text-sm font-semibold text-[#d4a843]">
                  Preview — Coming Soon
                </span>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
