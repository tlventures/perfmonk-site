import RevealWrapper from '@/components/ui/RevealWrapper'
import PricingToggle from '@/components/ui/PricingToggle'

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-[#101010] border-y border-white/[0.07]">
      <div className="container-max">
        <RevealWrapper>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-3">
              Pricing
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#f2f2f2] mb-4">
              Start free. Scale as you grow.
            </h2>
            <p className="text-[#808080] max-w-lg mx-auto">
              Every plan includes a 14-day trial of the full feature set. No credit card required.
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={0.1}>
          <PricingToggle />
        </RevealWrapper>

        <RevealWrapper delay={0.2}>
          <p className="text-center text-sm text-[#808080] mt-10">
            All prices in USD. Annual billing available at 20% discount.{' '}
            <a href="mailto:perfmonk@perfmonk.in" className="text-[#2dd4bf] hover:underline">
              Contact us
            </a>{' '}
            for custom quotes.
          </p>
        </RevealWrapper>
      </div>
    </section>
  )
}
