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
        <div className="grid lg:grid-cols-2 gap-14 items-start">
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
                The PerfMonk Engine bot turns Slack, Teams, and Mattermost into a performance
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
              <div className="flex gap-4">
                <Link
                  href="/contactus?demo=true"
                  className="px-5 py-2.5 bg-[#d4a843] text-[#0c0c0c] font-semibold rounded-lg hover:bg-[#d4a843]/90 transition-colors text-sm"
                >
                  Add to Slack
                </Link>
                <Link
                  href="/pricing"
                  className="px-5 py-2.5 border border-white/[0.11] text-[#f2f2f2] rounded-lg hover:bg-white/[0.07] transition-colors text-sm"
                >
                  Engine pricing
                </Link>
              </div>
            </RevealWrapper>
          </div>

          {/* Right — Slack mock */}
          <RevealWrapper delay={0.2}>
            <SlackMock />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
