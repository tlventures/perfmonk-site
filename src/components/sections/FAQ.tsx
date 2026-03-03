'use client'

import { useState } from 'react'
import { faqs } from '@/lib/constants/faq'
import RevealWrapper from '@/components/ui/RevealWrapper'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section-padding bg-[#101010] border-t border-white/[0.07]">
      <div className="container-max">
        <RevealWrapper>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#f2f2f2] mb-4">
              Frequently asked questions.
            </h2>
            <p className="text-[#808080] max-w-lg mx-auto">
              Can&apos;t find your answer?{' '}
              <a href="mailto:perfmonk@perfmonk.in" className="text-[#2dd4bf] hover:underline">
                Email us
              </a>
              .
            </p>
          </div>
        </RevealWrapper>

        <div className="max-w-2xl mx-auto space-y-2">
          {faqs.map((faq, i) => (
            <RevealWrapper key={faq.question} delay={i * 0.04}>
              <div className="rounded-xl border border-white/[0.07] overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-white/[0.03] transition-colors"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className={cn('font-medium text-sm', open === i ? 'text-[#f2f2f2]' : 'text-[#cccccc]')}>
                    {faq.question}
                  </span>
                  {open === i ? (
                    <Minus className="w-4 h-4 text-[#2dd4bf] flex-shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 text-[#808080] flex-shrink-0" />
                  )}
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-sm text-[#808080] leading-relaxed border-t border-white/[0.07] pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
