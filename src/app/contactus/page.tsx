'use client'

import { useState, Suspense } from 'react'
import { Mail, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'

function ContactForm() {
  const searchParams = useSearchParams()
  const isDemo = searchParams.get('demo') === 'true'

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: isDemo ? "Hi, I'd like to book a demo of PerfMonk." : '',
    demo: isDemo,
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok || data.error) {
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
      } else {
        setStatus('success')
      }
    } catch {
      setErrorMsg('Network error. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-[#2dd4bf]/20 bg-[#151515] p-10 flex flex-col items-center text-center gap-4">
        <CheckCircle className="w-10 h-10 text-[#2dd4bf]" />
        <h2 className="text-xl font-semibold text-[#f2f2f2]">Message sent!</h2>
        <p className="text-sm text-[#808080] max-w-xs">
          Thanks for reaching out. We&apos;ll get back to you within 1 business day.
        </p>
        <button
          onClick={() => {
            setStatus('idle')
            setForm({ name: '', email: '', company: '', message: '', demo: false })
          }}
          className="mt-2 text-sm text-[#2dd4bf] hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-white/[0.07] bg-[#151515] p-8 flex flex-col gap-5">
      <h2 className="text-lg font-semibold text-[#f2f2f2]">Send us a message</h2>

      {/* Demo toggle */}
      <label className="flex items-center gap-3 cursor-pointer select-none">
        <div
          role="switch"
          aria-checked={form.demo}
          onClick={() => setForm((p) => ({ ...p, demo: !p.demo }))}
          className={cn(
            'w-10 h-5 rounded-full transition-colors relative cursor-pointer',
            form.demo ? 'bg-[#2dd4bf]' : 'bg-[#404040]'
          )}
        >
          <span className={cn(
            'absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform',
            form.demo ? 'translate-x-5' : 'translate-x-0.5'
          )} />
        </div>
        <span className="text-sm text-[#cccccc]">I&apos;d like to book a demo</span>
      </label>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-medium text-[#808080]">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="bg-[#0c0c0c] border border-white/[0.11] rounded-lg px-3 py-2 text-sm text-[#f2f2f2] placeholder-[#404040] focus:outline-none focus:border-[#2dd4bf]/50 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-medium text-[#808080]">
            Work email <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            className="bg-[#0c0c0c] border border-white/[0.11] rounded-lg px-3 py-2 text-sm text-[#f2f2f2] placeholder-[#404040] focus:outline-none focus:border-[#2dd4bf]/50 transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="company" className="text-xs font-medium text-[#808080]">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          value={form.company}
          onChange={handleChange}
          placeholder="Acme Inc."
          className="bg-[#0c0c0c] border border-white/[0.11] rounded-lg px-3 py-2 text-sm text-[#f2f2f2] placeholder-[#404040] focus:outline-none focus:border-[#2dd4bf]/50 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-medium text-[#808080]">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your team, your stack, and what you're trying to solve..."
          className="bg-[#0c0c0c] border border-white/[0.11] rounded-lg px-3 py-2 text-sm text-[#f2f2f2] placeholder-[#404040] focus:outline-none focus:border-[#2dd4bf]/50 transition-colors resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="py-3 bg-[#2dd4bf] text-[#0c0c0c] font-semibold rounded-lg hover:bg-[#2dd4bf]/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm"
      >
        {status === 'loading' ? 'Sending…' : form.demo ? 'Request a demo' : 'Send message'}
      </button>

      <p className="text-xs text-[#404040] text-center">
        By submitting you agree to our{' '}
        <a href="/privacy" className="hover:text-[#808080] underline">Privacy Policy</a>.
      </p>
    </form>
  )
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-28">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — info */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-3">Contact</p>
            <h1 className="text-3xl md:text-4xl font-semibold text-[#f2f2f2] mb-4">
              Let&apos;s talk performance.
            </h1>
            <p className="text-[#808080] mb-10 leading-relaxed">
              Whether you want a product demo, have questions about our plans, or need a custom
              enterprise quote — we&apos;re here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#2dd4bf]/10 border border-[#2dd4bf]/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#2dd4bf]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#f2f2f2] mb-1">Email us directly</p>
                  <a href="mailto:perfmonk@perfmonk.in" className="text-sm text-[#2dd4bf] hover:underline">
                    perfmonk@perfmonk.in
                  </a>
                  <p className="text-xs text-[#808080] mt-0.5">We reply within 1 business day.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#2dd4bf]/10 border border-[#2dd4bf]/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#2dd4bf]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#f2f2f2] mb-1">Business hours</p>
                  <p className="text-sm text-[#808080]">Monday – Friday, 9 AM – 6 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#2dd4bf]/10 border border-[#2dd4bf]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#2dd4bf]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#f2f2f2] mb-1">Based in</p>
                  <p className="text-sm text-[#808080]">India 🇮🇳</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form wrapped in Suspense for useSearchParams */}
          <Suspense fallback={
            <div className="rounded-xl border border-white/[0.07] bg-[#151515] p-8 h-96 animate-pulse" />
          }>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
