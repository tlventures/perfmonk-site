'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { platformPlans, enginePlans, type PricingPlan } from '@/lib/constants/pricing'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={cn(
        'relative rounded-xl border p-6 flex flex-col gap-5 transition-all',
        plan.highlighted
          ? 'border-[#2dd4bf]/40 bg-[#151515] shadow-[0_0_40px_rgba(45,212,191,0.06)]'
          : 'border-white/[0.07] bg-[#101010]'
      )}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs font-semibold bg-[#2dd4bf] text-[#0c0c0c] rounded-full">
          {plan.badge}
        </span>
      )}

      <div>
        <p className="text-sm font-semibold text-[#cccccc] mb-2">{plan.name}</p>
        <div className="flex items-end gap-1">
          <span className="text-4xl font-bold text-[#f2f2f2]">{plan.price}</span>
          {plan.period && <span className="text-sm text-[#808080] mb-1">{plan.period}</span>}
        </div>
        <p className="text-sm text-[#808080] mt-2 leading-relaxed">{plan.description}</p>
      </div>

      <ul className="space-y-2 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-[#cccccc]">
            <Check className="w-4 h-4 text-[#2dd4bf] flex-shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>

      <Link
        href={plan.href}
        className={cn(
          'block text-center py-2.5 rounded-lg text-sm font-medium transition-colors',
          plan.highlighted
            ? 'bg-[#2dd4bf] text-[#0c0c0c] hover:bg-[#2dd4bf]/90'
            : 'border border-white/[0.11] text-[#f2f2f2] hover:bg-white/[0.07]'
        )}
      >
        {plan.cta}
      </Link>
    </div>
  )
}

export default function PricingToggle() {
  const [tab, setTab] = useState<'platform' | 'engine'>('platform')

  const plans = tab === 'platform' ? platformPlans : enginePlans

  return (
    <div>
      {/* Tab toggle */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-lg border border-white/[0.07] bg-[#151515] p-1 gap-1">
          {(['platform', 'engine'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                'px-5 py-2 rounded-md text-sm font-medium transition-all capitalize',
                tab === t
                  ? 'bg-[#0c0c0c] text-[#f2f2f2] shadow-sm'
                  : 'text-[#808080] hover:text-[#f2f2f2]'
              )}
            >
              {t === 'platform' ? '🖥 Platform' : '💬 Engine'}
            </button>
          ))}
        </div>
      </div>

      {/* Plans */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
