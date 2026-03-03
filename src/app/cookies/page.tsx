import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'PerfMonk Cookie Policy — how we use cookies and how to manage them.',
}

export default function CookiesPage() {
  const updated = 'March 1, 2025'

  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-28">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-3">Legal</p>
          <h1 className="text-3xl font-semibold text-[#f2f2f2] mb-2">Cookie Policy</h1>
          <p className="text-sm text-[#404040]">Last updated: {updated}</p>
        </div>

        <div className="space-y-8 text-sm text-[#cccccc] leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">What are cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help
              the site remember information about your visit, such as your login session or
              preferences.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">Cookies we use</h2>

            <div className="space-y-4">
              <div className="rounded-lg border border-white/[0.07] bg-[#151515] p-4">
                <p className="font-medium text-[#f2f2f2] mb-1">Strictly necessary cookies</p>
                <p className="text-[#808080]">
                  Required for the Service to function. These include session tokens for
                  authentication and CSRF protection tokens. These cookies cannot be disabled.
                </p>
              </div>

              <div className="rounded-lg border border-white/[0.07] bg-[#151515] p-4">
                <p className="font-medium text-[#f2f2f2] mb-1">Analytics cookies</p>
                <p className="text-[#808080]">
                  We use Vercel Analytics (privacy-friendly, no personal data) to understand how
                  users interact with our website — page views, navigation paths, and performance
                  metrics. No cookies are stored for this purpose.
                </p>
              </div>

              <div className="rounded-lg border border-white/[0.07] bg-[#151515] p-4">
                <p className="font-medium text-[#f2f2f2] mb-1">Preference cookies</p>
                <p className="text-[#808080]">
                  We may store your UI preferences (e.g., dashboard layout) in localStorage for a
                  better experience. This data is not sent to our servers.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">Managing cookies</h2>
            <p className="mb-3">
              You can control cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="list-none space-y-2 ml-4">
              {[
                'View cookies stored by a website.',
                'Block all cookies or cookies from specific sites.',
                'Delete cookies when you close your browser.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#808080] mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Note: Blocking strictly necessary cookies will prevent you from logging in or using
              the Service.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">Third-party cookies</h2>
            <p>
              We do not use third-party advertising or tracking cookies. Our analytics tool (Vercel
              Analytics) does not use cookies and does not store personal data.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#f2f2f2] mb-3">Contact</h2>
            <p>
              Questions about our cookie use? Email{' '}
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
