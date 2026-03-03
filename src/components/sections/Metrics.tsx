import RevealWrapper from '@/components/ui/RevealWrapper'

const metrics = [
  { value: '10×', label: 'Faster script creation', sub: 'vs manual authoring' },
  { value: '3 min', label: 'To your first test result', sub: 'from sign-up' },
  { value: '98%', label: 'Bottleneck detection accuracy', sub: 'across 50k+ test runs' },
  { value: '$0', label: 'To get started', sub: 'Free plan, no card needed' },
]

export default function Metrics() {
  return (
    <section className="border-y border-white/[0.07] bg-[#101010] py-14 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((m, i) => (
          <RevealWrapper key={m.label} delay={i * 0.08}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#f2f2f2] mb-1">{m.value}</p>
              <p className="text-sm font-medium text-[#cccccc]">{m.label}</p>
              <p className="text-xs text-[#808080] mt-0.5">{m.sub}</p>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}
