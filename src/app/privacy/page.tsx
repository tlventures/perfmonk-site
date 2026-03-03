import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'PerfMonk Privacy Policy — how we collect, use, and protect your data.',
}

export default function PrivacyPage() {
  const updated = 'March 1, 2025'

  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-28">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-3">Legal</p>
          <h1 className="text-3xl font-semibold text-[#f2f2f2] mb-2">Privacy Policy</h1>
          <p className="text-sm text-[#404040]">Last updated: {updated}</p>
        </div>

        <div className="space-y-8 text-sm text-[#cccccc] leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">1. Introduction</h2>
            <p>
              PerfMonk (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to
              protecting your privacy. This Privacy Policy explains what data we collect, how we use
              it, and your rights regarding that data. It applies to users of our website at
              perfmonk.in and our platform and API services.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">2. Data We Collect</h2>
            <p className="mb-3">We collect the following categories of information:</p>
            <ul className="list-none space-y-2 ml-4">
              {[
                'Account data: name, email address, company name, and password (hashed).',
                'Billing data: handled securely by our payment processor. We store only the last 4 digits of your card and billing address.',
                'Usage data: features used, test runs executed, API calls, and error logs.',
                'Test data: scripts you create, test results, and configuration you save. This data is yours.',
                'Technical data: IP address, browser type, device type, and cookies for session management.',
                'Communications: emails you send to us, including support requests.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#808080] mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">3. How We Use Your Data</h2>
            <p className="mb-3">We use your data to:</p>
            <ul className="list-none space-y-2 ml-4">
              {[
                'Provide, maintain, and improve the Service.',
                'Process payments and manage subscriptions.',
                'Send service-related communications (account updates, security alerts).',
                'Send product updates and marketing emails (you may opt out at any time).',
                'Analyse aggregate usage patterns to improve features.',
                'Comply with legal obligations.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#808080] mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">4. Data Sharing</h2>
            <p className="mb-3">
              We do not sell your personal data. We share data only with:
            </p>
            <ul className="list-none space-y-2 ml-4">
              {[
                'Service providers who help us operate the platform (hosting, payments, analytics) — under strict data processing agreements.',
                'Law enforcement or regulators if required by law.',
                'Acquirers in the event of a merger or acquisition — you will be notified in advance.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#808080] mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">5. Data Retention</h2>
            <p>
              We retain your personal data for as long as your account is active or as needed to
              provide the Service. Test results and scripts are retained for 12 months after account
              closure unless you request deletion earlier. Billing records are retained for 7 years
              as required by Indian financial regulations.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">6. Security</h2>
            <p>
              We implement industry-standard security measures including TLS encryption in transit,
              AES-256 encryption at rest, and regular security audits. Access to personal data is
              restricted to staff who require it for their role. Despite our efforts, no system is
              100% secure; please use strong passwords and notify us immediately of any suspected
              breach.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">7. Cookies</h2>
            <p>
              We use strictly necessary cookies for authentication and session management, and
              analytics cookies to understand how the Service is used. You can manage cookie
              preferences in your browser settings. See our{' '}
              <a href="/cookies" className="text-[#2dd4bf] hover:underline">
                Cookie Policy
              </a>{' '}
              for details.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">8. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-none space-y-2 ml-4">
              {[
                'Access a copy of your personal data.',
                'Correct inaccurate data.',
                'Delete your account and associated personal data.',
                'Object to or restrict certain processing.',
                'Data portability — export your test scripts and results in standard formats.',
                'Withdraw consent for marketing communications at any time.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#808080] mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email us at{' '}
              <a href="mailto:perfmonk@perfmonk.in" className="text-[#2dd4bf] hover:underline">
                perfmonk@perfmonk.in
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">9. Children&apos;s Privacy</h2>
            <p>
              The Service is not directed at children under 18. We do not knowingly collect personal
              data from children. If you believe a child has provided us data, please contact us and
              we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material
              changes with at least 14 days&apos; notice via email. Your continued use of the Service
              after the effective date constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">11. Contact</h2>
            <p>
              For privacy-related questions or to exercise your rights, contact us at{' '}
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
