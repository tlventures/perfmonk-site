import RevealWrapper from '@/components/ui/RevealWrapper'

const integrationRows = [
  {
    category: 'CI/CD',
    items: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'CircleCI', 'Bitbucket Pipelines'],
  },
  {
    category: 'Chat',
    items: ['Slack', 'Microsoft Teams', 'Mattermost'],
  },
  {
    category: 'Observability',
    items: ['Grafana', 'Datadog', 'Prometheus', 'New Relic'],
  },
  {
    category: 'Alerting & Tracking',
    items: ['PagerDuty', 'Jira', 'OpsGenie', 'Linear'],
  },
]

export default function Integrations() {
  return (
    <section id="integrations" className="section-padding bg-[#0c0c0c]">
      <div className="container-max">
        <RevealWrapper>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-3">
              Integrations
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#f2f2f2] mb-4">
              Fits right into your stack.
            </h2>
            <p className="text-[#808080] max-w-lg mx-auto">
              PerfMonk connects to the tools your team already uses — no new workflows to learn.
            </p>
          </div>
        </RevealWrapper>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {integrationRows.map((row, i) => (
            <RevealWrapper key={row.category} delay={i * 0.07}>
              <div className="card-base">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-4">
                  {row.category}
                </p>
                <ul className="space-y-2">
                  {row.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf]" />
                      <span className="text-sm text-[#cccccc]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper delay={0.3}>
          <p className="text-center text-sm text-[#808080] mt-8">
            Don&apos;t see your tool?{' '}
            <a href="mailto:perfmonk@perfmonk.in" className="text-[#2dd4bf] hover:underline">
              Request an integration
            </a>
          </p>
        </RevealWrapper>
      </div>
    </section>
  )
}
