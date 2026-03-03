import Link from 'next/link'
import { Zap } from 'lucide-react'
import { footerLinks } from '@/lib/constants/nav'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#101010]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-7 h-7 rounded-md bg-[#2dd4bf]/10 border border-[#2dd4bf]/30 flex items-center justify-center">
                <Zap className="w-4 h-4 text-[#2dd4bf]" />
              </div>
              <span className="font-semibold text-[#f2f2f2]">PerfMonk</span>
            </Link>
            <p className="text-sm text-[#808080] leading-relaxed max-w-xs">
              AI-powered performance engineering — from script generation to analysis, on the platform or in your chat.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="mailto:perfmonk@perfmonk.in"
                className="text-sm text-[#808080] hover:text-[#2dd4bf] transition-colors"
              >
                perfmonk@perfmonk.in
              </a>
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-4">
                {group}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#808080] hover:text-[#f2f2f2] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.07] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#404040]">
            © {new Date().getFullYear()} PerfMonk. All rights reserved.
          </p>
          <p className="text-xs text-[#404040]">
            Built with AI for performance engineers.
          </p>
        </div>
      </div>
    </footer>
  )
}
