import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface Props {
  params: { slug: string }
}

const posts: Record<string, { title: string; date: string; readTime: string; tag: string; body: string }> = {
  'ai-performance-testing-2025': {
    title: 'How AI Is Transforming Performance Testing in 2025',
    date: 'February 2025',
    readTime: '6 min read',
    tag: 'Industry',
    body: `
Performance testing has historically been a specialist discipline — the kind of thing that required a dedicated QA engineer with deep knowledge of JMeter or Gatling. In 2025, AI is changing that.

## The old way

Creating a realistic load test used to mean hours of scripting: recording HTTP traffic, parameterising data sets, adding think times, configuring assertions. Then running it and manually parsing thousands of rows of output to find the bottleneck.

## What changed

Large language models have made it possible to generate test scripts from plain-language descriptions with high accuracy. "Run a load test simulating 500 users checking out on /api/checkout for 3 minutes" now produces a complete, parameterised, production-ready script.

## The impact on engineering teams

Teams that adopt AI-assisted performance testing report three major changes:

1. **Speed**: Script creation drops from hours to minutes. Anyone on the team can write a test, not just the specialist.
2. **Coverage**: When scripting is easy, teams test more scenarios. Coverage goes up by default.
3. **Insight quality**: AI-powered analysis surfaces the root cause, not just the symptom. "p99 latency spike" becomes "database lock contention on orders.product_id — add index."

## What this means for PerfMonk

PerfMonk was built for this new world. Our AI agents handle the full lifecycle: generation, execution, analysis, and reporting. Whether you use the platform or the Engine bot in Slack, the goal is the same — make performance engineering accessible to every engineering team, not just specialists.

If you'd like to see this in action, [book a demo](/contactus?demo=true).
    `,
  },
  'jmeter-vs-k6-2025': {
    title: 'JMeter vs k6 in 2025: Which Should You Use?',
    date: 'January 2025',
    readTime: '8 min read',
    tag: 'Guide',
    body: `
JMeter has been the default load testing tool for over two decades. k6, launched in 2016, took a developer-first approach that resonated with modern teams. In 2025, both are mature and widely used. Here's how to choose.

## JMeter: strengths

- **GUI-based test builder**: Good for teams less comfortable with code
- **Ecosystem**: Thousands of plugins and decades of community knowledge
- **Reporting**: Built-in dashboards and HTML reports
- **Protocol support**: HTTP, JMS, JDBC, SMTP, and more

## k6: strengths

- **Code-first**: Tests are JavaScript — version-controlled, code-reviewed, refactored
- **CI/CD native**: Designed to run in pipelines from day one
- **Performance**: Dramatically lower resource usage per virtual user
- **Modern output**: Native support for Grafana, InfluxDB, and Prometheus

## Our recommendation

For teams with existing JMeter expertise or legacy test suites: stick with JMeter.

For greenfield projects, developer-led teams, or anyone building CI/CD-integrated tests: k6 is the better choice in 2025.

PerfMonk supports both — plus Locust and Gatling — so you don't have to choose one forever.
    `,
  },
  'shift-left-performance-testing': {
    title: 'Shift-Left Performance Testing: The Definitive Guide',
    date: 'December 2024',
    readTime: '10 min read',
    tag: 'Guide',
    body: `
"Shift left" means moving testing earlier in the development cycle. Applied to performance, it means catching regressions before they reach production — or even staging.

## Why it matters

The cost of fixing a performance issue multiplies with each stage it passes through. A regression caught in a pre-merge check costs minutes. The same regression caught in production after a major incident costs days.

## The four levels of shift-left performance

**Level 1 — Unit benchmarks**: Micro-benchmarks on individual functions. Fastest feedback, narrowest coverage.

**Level 2 — Component tests**: Load tests on isolated services or modules. Good for microservices.

**Level 3 — Integration tests**: Realistic load through the full stack in a staging environment. The most valuable layer.

**Level 4 — Synthetic monitoring**: Continuous low-volume tests against production to catch regressions between releases.

## How to implement it

1. Start with Level 3 — integration tests in CI. Set conservative thresholds (p95 < 500ms, error rate < 1%).
2. Block merges that fail thresholds. Make performance a first-class citizen alongside unit tests.
3. Add Level 4 once your team trusts the pipeline.

PerfMonk's CI/CD integrations handle steps 1 and 2 out of the box. See our [platform page](/#platform) for details.
    `,
  },
  'understanding-p99-latency': {
    title: 'Why p99 Latency Matters More Than p50',
    date: 'November 2024',
    readTime: '5 min read',
    tag: 'Engineering',
    body: `
Most performance dashboards show average latency. Average latency is almost useless. Here's why tail latencies — p95, p99 — are the metrics you should care about.

## The problem with averages

Imagine 100 requests: 99 complete in 10ms, one takes 10 seconds. The average is ~109ms — a number that looks fine and hides a catastrophic experience for 1% of users.

## What percentiles tell you

- **p50** (median): Half your requests are faster, half are slower. Useful for capacity planning.
- **p95**: 95% of users get this or better. A good SLO target for most APIs.
- **p99**: 1% of users get this or worse. This is where infrastructure problems hide.
- **p99.9**: One in a thousand. Matters at scale — a p99.9 of 10s means thousands of poor experiences per day on a busy service.

## Why tail latencies spike

Common causes of p99 spikes:
- **Lock contention**: A slow database query that blocks others under concurrency
- **GC pauses**: Garbage collection in JVM or .NET languages
- **Cold starts**: Unwarmed cache or connection pool exhaustion
- **Resource limits**: CPU throttling, memory pressure, or disk I/O saturation

## How PerfMonk helps

PerfMonk's AI analysis automatically identifies the cause of tail latency spikes — not just that p99 is high, but why. Contact us to learn more.
    `,
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts[params.slug]
  if (!post) return { title: 'Post Not Found' }
  return {
    title: post.title,
    description: post.body.slice(0, 160).replace(/[#\n]/g, ' ').trim(),
  }
}

export default function BlogPost({ params }: Props) {
  const post = posts[params.slug]

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0c0c0c] pt-28 flex flex-col items-center justify-center">
        <p className="text-[#808080] mb-4">Post not found.</p>
        <Link href="/blog" className="text-[#2dd4bf] hover:underline text-sm">
          ← Back to Blog
        </Link>
      </div>
    )
  }

  // Parse simple markdown-like body
  const lines = post.body.trim().split('\n')

  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-28">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-[#808080] hover:text-[#f2f2f2] transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2dd4bf]">
            {post.tag}
          </span>
          <h1 className="text-3xl font-semibold text-[#f2f2f2] mt-3 mb-3 leading-tight">
            {post.title}
          </h1>
          <p className="text-sm text-[#404040]">
            {post.date} · {post.readTime}
          </p>
        </div>

        <div className="border-t border-white/[0.07] pt-8 prose-custom">
          {lines.map((line, i) => {
            if (line.startsWith('## ')) {
              return (
                <h2 key={i} className="text-xl font-semibold text-[#f2f2f2] mt-8 mb-3">
                  {line.replace('## ', '')}
                </h2>
              )
            }
            if (line.startsWith('**') && line.endsWith('**')) {
              return (
                <p key={i} className="font-semibold text-[#f2f2f2] mt-4 mb-1">
                  {line.replace(/\*\*/g, '')}
                </p>
              )
            }
            if (line.trim() === '') return <div key={i} className="h-4" />
            if (line.startsWith('- **')) {
              const parts = line.replace('- **', '').split('**:')
              return (
                <p key={i} className="text-[#cccccc] text-sm leading-relaxed ml-4 mb-2">
                  <strong className="text-[#f2f2f2]">{parts[0]}</strong>:{parts[1]}
                </p>
              )
            }
            if (line.match(/^\d+\./)) {
              return (
                <p key={i} className="text-[#cccccc] text-sm leading-relaxed mb-2 ml-4">
                  {line}
                </p>
              )
            }
            return (
              <p key={i} className="text-[#cccccc] leading-relaxed mb-2 text-sm">
                {line}
              </p>
            )
          })}
        </div>

        <div className="mt-16 rounded-xl border border-white/[0.07] bg-[#151515] p-6 text-center">
          <p className="text-[#f2f2f2] font-medium mb-2">Ready to ship faster?</p>
          <p className="text-sm text-[#808080] mb-4">
            See how PerfMonk can automate your performance testing.
          </p>
          <Link
            href="/contactus?demo=true"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2dd4bf] text-[#0c0c0c] font-semibold rounded-lg hover:bg-[#2dd4bf]/90 transition-colors text-sm"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return [
    { slug: 'ai-performance-testing-2025' },
    { slug: 'jmeter-vs-k6-2025' },
    { slug: 'shift-left-performance-testing' },
    { slug: 'understanding-p99-latency' },
  ]
}
