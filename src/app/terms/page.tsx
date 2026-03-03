import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'PerfMonk Terms of Service — the agreement governing your use of our platform and services.',
}

export default function TermsPage() {
  const updated = 'March 1, 2025'

  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-28">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-3">Legal</p>
          <h1 className="text-3xl font-semibold text-[#f2f2f2] mb-2">Terms of Service</h1>
          <p className="text-sm text-[#404040]">Last updated: {updated}</p>
        </div>

        <div className="space-y-8 text-sm text-[#cccccc] leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using PerfMonk (the &ldquo;Service&rdquo;), you agree to be bound by
              these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do
              not use the Service. These Terms apply to all users, including individual users,
              organisations, and their representatives.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">2. Description of Service</h2>
            <p>
              PerfMonk provides an AI-powered performance engineering platform, including web-based
              tools, APIs, and a chat bot integration (&ldquo;Engine&rdquo;). Features include
              automated test script generation, distributed load execution, result analysis, and
              reporting. The Service is provided on a subscription basis.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">3. Account Registration</h2>
            <p className="mb-3">
              You must create an account to access certain features. You agree to provide accurate,
              current, and complete information, and to maintain and promptly update your account
              information. You are responsible for maintaining the confidentiality of your credentials
              and for all activities that occur under your account.
            </p>
            <p>
              You must be at least 18 years of age to create an account. By creating an account on
              behalf of an organisation, you represent that you have authority to bind that
              organisation to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">4. Acceptable Use</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-none space-y-2 ml-4">
              {[
                'Use the Service to conduct load tests against systems you do not own or have explicit written permission to test.',
                'Attempt to reverse-engineer, decompile, or extract source code from the Service.',
                'Use the Service to generate scripts designed to attack, disrupt, or harm third-party systems.',
                'Resell, sublicense, or commercially exploit the Service without PerfMonk\'s written consent.',
                'Violate any applicable laws or regulations in your use of the Service.',
                'Introduce malicious code, bots, or automated scripts other than those provided by PerfMonk.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#808080] mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">5. Subscriptions and Payment</h2>
            <p className="mb-3">
              Paid plans are billed on a monthly or annual basis. All fees are non-refundable except
              as required by applicable law or as stated in our refund policy. Prices are listed in
              USD unless otherwise noted.
            </p>
            <p>
              We reserve the right to change pricing with 30 days&apos; notice. Continued use of the
              Service after a price change constitutes your acceptance of the new price.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">6. Intellectual Property</h2>
            <p>
              PerfMonk and its licensors own all intellectual property rights in the Service,
              including all software, algorithms, AI models, and documentation. You retain ownership
              of any test scripts and data you create using the Service. You grant PerfMonk a limited
              licence to use your data solely to provide and improve the Service.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">7. Confidentiality</h2>
            <p>
              Each party agrees to keep confidential any non-public information disclosed by the other
              that is designated as confidential or that reasonably should be understood to be
              confidential. This obligation does not apply to information that is publicly known,
              independently developed, or required to be disclosed by law.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">8. Disclaimers</h2>
            <p>
              THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT
              WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. PERFMONK DOES NOT WARRANT THAT THE SERVICE
              WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE. YOUR USE OF THE SERVICE IS AT YOUR OWN
              RISK.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, PERFMONK&apos;S TOTAL LIABILITY ARISING OUT OF
              OR RELATED TO THESE TERMS WILL NOT EXCEED THE AMOUNT PAID BY YOU TO PERFMONK IN THE
              TWELVE MONTHS PRECEDING THE CLAIM. PERFMONK WILL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">10. Termination</h2>
            <p>
              Either party may terminate these Terms at any time. PerfMonk may suspend or terminate
              your access immediately if you violate these Terms. Upon termination, your right to use
              the Service ceases. Sections relating to IP, disclaimers, and liability survive
              termination.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">11. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes will be subject to the
              exclusive jurisdiction of the courts in India.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">12. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of material changes
              with at least 14 days&apos; notice via email or in-app notification. Your continued use
              after the effective date constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">13. Contact</h2>
            <p>
              For questions about these Terms, please contact us at{' '}
              <a href="mailto:perfmonk@perfmonk.in" className="text-[#2dd4bf] hover:underline">
                perfmonk@perfmonk.in
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
