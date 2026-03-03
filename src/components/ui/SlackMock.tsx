import { cn } from '@/lib/utils'

interface ResultCard {
  title: string
  stats: { label: string; value: string; status?: 'ok' | 'warn' | 'fail' }[]
}

interface Message {
  role: 'user' | 'bot'
  author: string
  time: string
  text: React.ReactNode
  card?: ResultCard
}

const messages: Message[] = [
  {
    role: 'user',
    author: 'you',
    time: '10:14 AM',
    text: '@perfmonk run load test on /api/checkout with 500 users for 3 minutes',
  },
  {
    role: 'bot',
    author: 'PerfMonk',
    time: '10:14 AM',
    text: (
      <span>
        Starting load test on <code className="bg-white/[0.07] px-1 rounded text-[#2dd4bf]">/api/checkout</code> —
        500 VUs · 3 min ramp. I&apos;ll ping you when it&apos;s done.
      </span>
    ),
  },
  {
    role: 'bot',
    author: 'PerfMonk',
    time: '10:17 AM',
    text: '✅ Test complete. Results look mostly healthy, one area to watch:',
    card: {
      title: 'Test Results · /api/checkout',
      stats: [
        { label: 'p50 latency', value: '38 ms', status: 'ok' },
        { label: 'p95 latency', value: '142 ms', status: 'ok' },
        { label: 'p99 latency', value: '890 ms', status: 'warn' },
        { label: 'Error rate', value: '0.1%', status: 'ok' },
        { label: 'Throughput', value: '487 req/s', status: 'ok' },
      ],
    },
  },
  {
    role: 'user',
    author: 'you',
    time: '10:18 AM',
    text: "why is p99 latency so high?",
  },
  {
    role: 'bot',
    author: 'PerfMonk',
    time: '10:18 AM',
    text: (
      <span>
        p99 spike is likely a <strong className="text-[#d4a843]">database lock contention</strong> issue on the
        inventory check query. It affects ~1% of requests under high concurrency. I&apos;d recommend adding an index
        on <code className="bg-white/[0.07] px-1 rounded text-[#2dd4bf]">orders.product_id</code>.
      </span>
    ),
  },
]

const statusColor = { ok: 'text-[#2dd4bf]', warn: 'text-[#d4a843]', fail: 'text-red-400' }

export default function SlackMock() {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-[#101010] overflow-hidden font-sans text-sm">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.07] bg-[#151515]">
        <div className="w-5 h-5 rounded bg-[#2dd4bf]/10 border border-[#2dd4bf]/30 flex items-center justify-center text-[8px] font-bold text-[#2dd4bf]">P</div>
        <span className="text-xs font-medium text-[#cccccc]">#engineering</span>
        <span className="ml-auto text-[10px] text-[#404040]">Slack</span>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
        {messages.map((msg, i) => (
          <div key={i} className="flex gap-3">
            {/* Avatar */}
            <div
              className={cn(
                'flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold',
                msg.role === 'bot'
                  ? 'bg-[#2dd4bf]/10 border border-[#2dd4bf]/30 text-[#2dd4bf]'
                  : 'bg-white/[0.07] text-[#808080]'
              )}
            >
              {msg.role === 'bot' ? 'PM' : 'You'}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2 mb-1">
                <span className={cn('text-xs font-semibold', msg.role === 'bot' ? 'text-[#2dd4bf]' : 'text-[#f2f2f2]')}>
                  {msg.role === 'bot' ? 'PerfMonk' : 'You'}
                </span>
                <span className="text-[10px] text-[#404040]">{msg.time}</span>
              </div>
              <p className="text-[#cccccc] text-xs leading-relaxed">{msg.text}</p>

              {/* Result card */}
              {msg.card && (
                <div className="mt-2 rounded-lg border border-white/[0.07] bg-[#151515] p-3">
                  <p className="text-[10px] font-semibold text-[#808080] uppercase tracking-widest mb-2">
                    {msg.card.title}
                  </p>
                  <div className="grid grid-cols-2 gap-y-1.5 gap-x-4">
                    {msg.card.stats.map((s) => (
                      <div key={s.label} className="flex items-center justify-between">
                        <span className="text-[11px] text-[#808080]">{s.label}</span>
                        <span className={cn('text-[11px] font-mono font-semibold', s.status ? statusColor[s.status] : 'text-[#f2f2f2]')}>
                          {s.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
