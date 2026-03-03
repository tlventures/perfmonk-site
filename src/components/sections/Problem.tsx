import RevealWrapper from '@/components/ui/RevealWrapper'
import { X } from 'lucide-react'

const problems = [
  {
    title: 'Script writing is a specialist skill',
    body: 'Creating JMeter or k6 scripts requires deep expertise. Most teams either skip performance tests or block on the one engineer who knows how.',
  },
  {
    title: 'Results are hard to interpret',
    body: 'Raw load test output is noisy. Teams spend hours filtering metrics to find the actual problem — if they ever do.',
  },
  {
    title: 'Performance is an afterthought',
    body: 'Tests happen in a separate phase, usually right before release. By then, fixing issues is expensive and stressful.',
  },
  {
    title: 'Tooling is fragmented',
    body: 'JMeter, Gatling, k6, Grafana, Datadog, Slack — each team stitches together their own pipeline. Maintenance becomes a second job.',
  },
]

export default function Problem() {
  return (
    <section className="section-padding bg-[#0c0c0c]">
      <div className="container-max">
        <RevealWrapper>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-3">
              The problem
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#f2f2f2] mb-4">
              Performance testing is broken.
            </h2>
            <p className="text-[#808080] max-w-xl mx-auto">
              It&apos;s too slow, too specialist, and too disconnected from how modern teams work.
            </p>
          </div>
        </RevealWrapper>

        <div className="grid sm:grid-cols-2 gap-4">
          {problems.map((p, i) => (
            <RevealWrapper key={p.title} delay={i * 0.08}>
              <div className="card-base flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <X className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <p className="font-medium text-[#f2f2f2] mb-1">{p.title}</p>
                  <p className="text-sm text-[#808080] leading-relaxed">{p.body}</p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
