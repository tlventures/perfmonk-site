import Hero from '@/components/sections/Hero'
import Metrics from '@/components/sections/Metrics'
import Problem from '@/components/sections/Problem'
import Solution from '@/components/sections/Solution'
import Platform from '@/components/sections/Platform'
import Engine from '@/components/sections/Engine'
import Integrations from '@/components/sections/Integrations'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import FAQ from '@/components/sections/FAQ'

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <Problem />
      <Solution />
      <Platform />
      <Engine />
      <Integrations />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  )
}
