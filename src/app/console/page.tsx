'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import {
  CheckCircle2, XCircle, Loader2, PauseCircle, Flag, Brain, Play, Clock,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const API = process.env.NEXT_PUBLIC_AGENTLOAD_API || 'http://localhost:8097'

type Ev = { seq?: number; step: string; status: string; title: string; detail: string; data?: any }
type RunRow = { id: string; status: string; nfr: string; result: string; before_p95?: number; after_p95?: number; passed?: boolean }

const ICON: Record<string, any> = {
  ok: CheckCircle2, fail: XCircle, running: Loader2, await_approval: PauseCircle, done: Flag,
}
const COLOR: Record<string, string> = {
  ok: 'text-teal', fail: 'text-red-400', running: 'text-g1', await_approval: 'text-eng', done: 'text-teal',
}

function StepRow({ ev }: { ev: Ev }) {
  if (ev.step === 'summary') {
    return (
      <div className="flex gap-3 rounded-lg border border-teal/30 bg-s1 p-3">
        <Brain className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
        <div>
          <div className="text-sm font-medium text-white">Summary</div>
          <div className="text-sm text-g1">{ev.detail}</div>
        </div>
      </div>
    )
  }
  const Icon = ICON[ev.status] || Clock
  return (
    <div className="flex gap-3 py-1.5">
      <Icon className={cn('mt-0.5 h-4 w-4 shrink-0', COLOR[ev.status] || 'text-g2', ev.status === 'running' && 'animate-spin')} />
      <div className="min-w-0">
        <span className="text-sm font-medium text-white">{ev.title}</span>
        {ev.detail && <span className="text-sm text-g2"> — {ev.detail}</span>}
        {ev.step === 'rca' && Array.isArray(ev.data?.evidence) && (
          <ul className="mt-1 space-y-0.5 border-l border-g3 pl-3">
            {ev.data.evidence.map((e: string, i: number) => (
              <li key={i} className="text-xs text-g2">{e}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default function ConsolePage() {
  const [nfr, setNfr] = useState('product search must serve p95 < 300ms at 40 concurrent users')
  const [plan, setPlan] = useState('')
  const [target, setTarget] = useState('http://localhost:8080')
  const [prometheus, setPrometheus] = useState('http://localhost:9090')
  const [duration, setDuration] = useState('15s')
  const [regions, setRegions] = useState('us-east-1')
  const [events, setEvents] = useState<Ev[]>([])
  const [runId, setRunId] = useState<string | null>(null)
  const [status, setStatus] = useState<string>('')
  const [questions, setQuestions] = useState<string[]>([])
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [history, setHistory] = useState<RunRow[]>([])
  const esRef = useRef<EventSource | null>(null)

  const loadHistory = useCallback(async () => {
    try {
      const r = await fetch(`${API}/agentload/runs`)
      setHistory((await r.json()).runs || [])
    } catch { /* API not up */ }
  }, [])

  useEffect(() => { loadHistory() }, [loadHistory])
  useEffect(() => () => esRef.current?.close(), [])

  const streamRun = useCallback((id: string) => {
    esRef.current?.close()
    setEvents([])
    setStatus('running')
    const es = new EventSource(`${API}/agentload/runs/${id}/stream`)
    esRef.current = es
    es.onmessage = (m) => {
      const ev: Ev = JSON.parse(m.data)
      if (ev.step === '_end') { es.close(); setStatus(ev.status); loadHistory(); return }
      setEvents((prev) => [...prev, ev])
      if (ev.status === 'await_approval') setStatus('await_approval')
      if (ev.step === 'clarify' && ev.status === 'needs_input') {
        setQuestions(ev.data?.questions || [])
        setStatus('needs_input')
      }
    }
    es.onerror = () => { es.close() }
  }, [loadHistory])

  const start = useCallback(async () => {
    const r = await fetch(`${API}/agentload/runs`, {
      method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        nfr, plan, target, prometheus,
        params: {
          duration, reset: true,
          regions: regions.split(',').map((s) => s.trim()).filter(Boolean),
        },
      }),
    })
    const id = (await r.json()).run_id
    setRunId(id)
    streamRun(id)
  }, [nfr, plan, target, prometheus, duration, regions, streamRun])

  const submitAnswers = useCallback(async () => {
    if (!runId) return
    setStatus('running'); setQuestions([])
    await fetch(`${API}/agentload/runs/${runId}/answer`, {
      method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ answers }),
    })
  }, [runId, answers])

  const decide = useCallback(async (decision: boolean) => {
    if (!runId) return
    setStatus('running')
    await fetch(`${API}/agentload/runs/${runId}/approve`, {
      method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ decision }),
    })
  }, [runId])

  const viewRun = useCallback(async (id: string) => {
    esRef.current?.close()
    const r = await fetch(`${API}/agentload/runs/${id}`)
    const data = await r.json()
    setRunId(id); setEvents(data.events || []); setStatus(data.status)
  }, [])

  const running = status === 'running'

  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-28">
      <h1 className="text-2xl font-semibold text-white">Console</h1>
      <p className="mt-1 text-sm text-g2">
        Run the closed loop: NFR → SLO → load test → root cause → approve → fix → verify.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-[1fr_320px]">
        {/* run form + stream */}
        <div>
          <div className="space-y-3 rounded-xl border border-g3 bg-bg2 p-4">
            <label className="block text-xs text-g2">Requirement / NFR (paste the full document — multi-line is fine)</label>
            <textarea value={nfr} onChange={(e) => setNfr(e.target.value)} rows={4}
              className="w-full rounded-md border border-g3 bg-s1 p-2 text-sm text-white outline-none focus:border-teal" />
            <label className="block text-xs text-g2">Test plan / PRD (optional — journeys, data, workload)</label>
            <textarea value={plan} onChange={(e) => setPlan(e.target.value)} rows={3}
              placeholder="e.g. login → search → checkout; 200ms think-time; test data in orders.csv; peak 3000 rpm"
              className="w-full rounded-md border border-g3 bg-s1 p-2 text-sm text-white outline-none focus:border-teal" />
            <div className="grid grid-cols-3 gap-2">
              <input value={target} onChange={(e) => setTarget(e.target.value)} placeholder="target"
                className="rounded-md border border-g3 bg-s1 p-2 text-xs text-white outline-none focus:border-teal" />
              <input value={prometheus} onChange={(e) => setPrometheus(e.target.value)} placeholder="prometheus"
                className="rounded-md border border-g3 bg-s1 p-2 text-xs text-white outline-none focus:border-teal" />
              <input value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="duration"
                className="rounded-md border border-g3 bg-s1 p-2 text-xs text-white outline-none focus:border-teal" />
            </div>
            <label className="block text-xs text-g2">Generate load from (AWS regions, comma-separated)</label>
            <input value={regions} onChange={(e) => setRegions(e.target.value)}
              placeholder="us-east-1, eu-west-1"
              className="w-full rounded-md border border-g3 bg-s1 p-2 text-xs text-white outline-none focus:border-teal" />
            <button onClick={start} disabled={running}
              className="inline-flex items-center gap-2 rounded-md bg-teal px-4 py-2 text-sm font-medium text-bg disabled:opacity-50">
              {running ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
              Run closed loop
            </button>
          </div>

          {status === 'needs_input' && questions.length > 0 && (
            <div className="mt-4 rounded-xl border border-eng/40 bg-s1 p-4">
              <div className="text-sm font-medium text-eng">Clarification needed before running</div>
              <p className="mt-1 text-xs text-g2">The agent won&apos;t run blindly — answer what it needs first.</p>
              <div className="mt-3 space-y-3">
                {questions.map((q, i) => (
                  <div key={i}>
                    <label className="block text-xs text-g1">{q}</label>
                    <input value={answers[q] || ''} onChange={(e) => setAnswers((a) => ({ ...a, [q]: e.target.value }))}
                      className="mt-1 w-full rounded-md border border-g3 bg-bg2 p-2 text-sm text-white outline-none focus:border-teal" />
                  </div>
                ))}
              </div>
              <button onClick={submitAnswers}
                className="mt-3 rounded-md bg-teal px-4 py-2 text-sm font-medium text-bg">Submit answers</button>
            </div>
          )}

          {status === 'await_approval' && (
            <div className="mt-4 flex items-center justify-between rounded-xl border border-eng/40 bg-s1 p-4">
              <span className="text-sm text-eng">Approval needed — apply the recommended fix?</span>
              <div className="flex gap-2">
                <button onClick={() => decide(true)} className="rounded-md bg-teal px-3 py-1.5 text-sm font-medium text-bg">Approve fix</button>
                <button onClick={() => decide(false)} className="rounded-md bg-red-500 px-3 py-1.5 text-sm font-medium text-white">Reject</button>
              </div>
            </div>
          )}

          <div className="mt-4 space-y-1 rounded-xl border border-g3 bg-bg2 p-4">
            {events.length === 0
              ? <div className="text-sm text-g3">Submit a run to see steps stream here.</div>
              : events.map((ev, i) => <StepRow key={i} ev={ev} />)}
          </div>
        </div>

        {/* history */}
        <div>
          <div className="mb-2 text-xs uppercase tracking-wide text-g2">Run history</div>
          <div className="space-y-2">
            {history.length === 0 && <div className="text-sm text-g3">No runs yet.</div>}
            {history.map((r) => (
              <button key={r.id} onClick={() => viewRun(r.id)}
                className="block w-full rounded-lg border border-g3 bg-s1 p-3 text-left hover:border-teal">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-g2">{r.id}</span>
                  <span className={cn('text-xs', r.status === 'done' ? 'text-teal' : r.status === 'error' ? 'text-red-400' : 'text-eng')}>{r.status}</span>
                </div>
                <div className="mt-1 truncate text-sm text-white">{r.nfr}</div>
                {r.before_p95 != null && r.after_p95 != null && (
                  <div className="mt-1 text-xs text-g2">p95 {Math.round(r.before_p95)}ms → {Math.round(r.after_p95)}ms {r.passed ? '✅' : ''}</div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
