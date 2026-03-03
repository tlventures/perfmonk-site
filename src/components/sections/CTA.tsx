import Link from 'next/link'
import RevealWrapper from '@/components/ui/RevealWrapper'

export default function CTA() {
  return (
    <section className="section-padding bg-[#0c0c0c]">
      <div className="container-max">
        <RevealWrapper>
          <div className="relative rounded-2xl border border-[#2dd4bf]/15 bg-[#151515] p-12 text-center overflow-hidden">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#2dd4bf]/[0.03] to-transparent pointer-events-none" />

            <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-4">
              Get started today
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#f2f2f2] mb-4 relative">
              Your next release deserves a
              <br />
              <span className="font-serif italic text-[#2dd4bf]">performance champion.</span>
            </h2>
            <p className="text-[#808080] max-w-md mx-auto mb-8 relative">
              Join teams shipping faster and more confidently with AI-powered performance
              engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center relative">
              <Link
                href="/contactus?demo=true"
                className="px-8 py-3 bg-[#2dd4bf] text-[#0c0c0c] font-semibold rounded-lg hover:bg-[#2dd4bf]/90 transition-colors"
              >
                Book a demo
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-3 border border-white/[0.11] text-[#f2f2f2] rounded-lg hover:bg-white/[0.07] transition-colors"
              >
                See pricing
              </Link>
            </div>

            <p className="mt-6 text-xs text-[#404040] relative">
              No credit card · 14-day free trial · Cancel anytime
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
