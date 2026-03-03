'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { navLinks } from '@/lib/constants/nav'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/[0.07]'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-md bg-[#2dd4bf]/10 border border-[#2dd4bf]/30 flex items-center justify-center group-hover:bg-[#2dd4bf]/20 transition-colors">
            <Zap className="w-4 h-4 text-[#2dd4bf]" />
          </div>
          <span className="font-semibold text-[#f2f2f2] tracking-tight">PerfMonk</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm text-[#808080] hover:text-[#f2f2f2] transition-colors rounded-md hover:bg-white/[0.05]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contactus"
            className="px-4 py-1.5 text-sm text-[#f2f2f2] rounded-lg border border-white/[0.11] hover:bg-white/[0.07] transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/contactus?demo=true"
            className="px-4 py-1.5 text-sm font-medium bg-[#2dd4bf] text-[#0c0c0c] rounded-lg hover:bg-[#2dd4bf]/90 transition-colors"
          >
            Book a demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-[#808080] hover:text-[#f2f2f2]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#101010] border-b border-white/[0.07] px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-[#cccccc] hover:text-[#f2f2f2] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/contactus"
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-center text-[#f2f2f2] rounded-lg border border-white/[0.11]"
            >
              Contact
            </Link>
            <Link
              href="/contactus?demo=true"
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium text-center bg-[#2dd4bf] text-[#0c0c0c] rounded-lg"
            >
              Book a demo
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
