import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Performance engineering insights, tutorials, and product updates from the PerfMonk team.',
}

const posts = [
  {
    slug: 'ai-performance-testing-2025',
    title: 'How AI Is Transforming Performance Testing in 2025',
    excerpt: 'From manual script writing to AI-generated load tests — here\'s how the landscape has shifted and what it means for engineering teams.',
    date: 'February 2025',
    readTime: '6 min read',
    tag: 'Industry',
  },
  {
    slug: 'jmeter-vs-k6-2025',
    title: 'JMeter vs k6 in 2025: Which Should You Use?',
    excerpt: 'A practical comparison of the two most popular open-source load testing tools — with honest trade-offs and a recommendation for modern teams.',
    date: 'January 2025',
    readTime: '8 min read',
    tag: 'Guide',
  },
  {
    slug: 'shift-left-performance-testing',
    title: 'Shift-Left Performance Testing: The Definitive Guide',
    excerpt: 'How to move performance tests into your CI pipeline without slowing down development — practical steps, tools, and thresholds.',
    date: 'December 2024',
    readTime: '10 min read',
    tag: 'Guide',
  },
  {
    slug: 'understanding-p99-latency',
    title: 'Why p99 Latency Matters More Than p50',
    excerpt: 'Most performance dashboards show averages. Here\'s why you should be watching tail latencies — and how to diagnose spikes.',
    date: 'November 2024',
    readTime: '5 min read',
    tag: 'Engineering',
  },
]

const tagColor: Record<string, string> = {
  Industry: 'text-[#2dd4bf] bg-[#2dd4bf]/10 border-[#2dd4bf]/20',
  Guide: 'text-[#d4a843] bg-[#d4a843]/10 border-[#d4a843]/20',
  Engineering: 'text-[#cccccc] bg-white/[0.05] border-white/[0.07]',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-28">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-3">Blog</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-[#f2f2f2] mb-4">
            Performance engineering, demystified.
          </h1>
          <p className="text-[#808080]">
            Guides, insights, and updates from the PerfMonk team.
          </p>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-xl border border-white/[0.07] bg-[#151515] p-6 hover:border-white/[0.14] hover:bg-[#1a1a1a] transition-all group"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full border ${tagColor[post.tag] || 'text-[#cccccc] bg-white/[0.05] border-white/[0.07]'}`}
                >
                  {post.tag}
                </span>
                <span className="text-xs text-[#404040]">{post.readTime}</span>
              </div>
              <h2 className="text-lg font-semibold text-[#f2f2f2] mb-2 group-hover:text-[#2dd4bf] transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-[#808080] leading-relaxed mb-4">{post.excerpt}</p>
              <p className="text-xs text-[#404040]">{post.date}</p>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-white/[0.07] bg-[#151515] p-8 text-center">
          <p className="text-[#f2f2f2] font-medium mb-2">Stay in the loop</p>
          <p className="text-sm text-[#808080] mb-4">
            Get new articles and product updates in your inbox.
          </p>
          <a
            href="mailto:perfmonk@perfmonk.in?subject=Subscribe%20to%20PerfMonk%20Blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2dd4bf] text-[#0c0c0c] font-semibold rounded-lg hover:bg-[#2dd4bf]/90 transition-colors text-sm"
          >
            Subscribe via email
          </a>
        </div>
      </div>
    </div>
  )
}
