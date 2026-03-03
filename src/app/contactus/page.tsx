import type { Metadata } from 'next'
import { Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the PerfMonk team for demos, questions, or enterprise enquiries.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-28">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-3">
              Contact
            </p>
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
                  <p className="text-sm font-medium text-[#f2f2f2] mb-1">Email us</p>
                  <a
                    href="mailto:perfmonk@perfmonk.in"
                    className="text-sm text-[#2dd4bf] hover:underline"
                  >
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

          {/* Right — direct mailto card */}
          <div className="rounded-xl border border-white/[0.07] bg-[#151515] p-8 flex flex-col gap-6">
            <h2 className="text-lg font-semibold text-[#f2f2f2]">Send us a message</h2>
            <p className="text-sm text-[#808080] leading-relaxed">
              Click the button below to open an email to our team. Include your name, company, and
              what you&apos;re looking for — we&apos;ll get back to you within 24 hours.
            </p>

            <div className="space-y-3 text-sm text-[#cccccc]">
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] mt-1.5 flex-shrink-0" />
                <span>Request a product demo</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] mt-1.5 flex-shrink-0" />
                <span>Ask about enterprise pricing</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] mt-1.5 flex-shrink-0" />
                <span>Integration or technical questions</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] mt-1.5 flex-shrink-0" />
                <span>Partnership enquiries</span>
              </div>
            </div>

            <a
              href="mailto:perfmonk@perfmonk.in?subject=PerfMonk%20Enquiry&body=Hi%20PerfMonk%20team%2C%0A%0AI%27m%20reaching%20out%20because..."
              className="mt-auto block text-center py-3 bg-[#2dd4bf] text-[#0c0c0c] font-semibold rounded-lg hover:bg-[#2dd4bf]/90 transition-colors"
            >
              Open email client
            </a>

            <p className="text-xs text-[#404040] text-center -mt-2">
              Opens your default mail app with a pre-filled template.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
