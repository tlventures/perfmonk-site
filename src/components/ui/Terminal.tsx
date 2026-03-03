'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface TerminalLine {
  cls: 'cmd' | 'out' | 'success' | 'info' | 'dim'
  text: string
}

interface TerminalProps {
  lines: TerminalLine[]
  speed?: number
  className?: string
}

const clsStyles: Record<string, string> = {
  cmd: 'text-[#f2f2f2]',
  out: 'text-[#cccccc]',
  success: 'text-[#2dd4bf]',
  info: 'text-[#d4a843]',
  dim: 'text-[#808080]',
}

export default function Terminal({ lines, speed = 320, className }: TerminalProps) {
  const [visible, setVisible] = useState<TerminalLine[]>([])
  const [cursor, setCursor] = useState(true)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let idx = 0
    let timeout: ReturnType<typeof setTimeout>
    let cancelled = false

    const push = () => {
      if (cancelled) return
      if (idx < lines.length) {
        const line = lines[idx]
        if (line) setVisible((prev) => [...prev, line])
        idx++
        const jitter = Math.random() * 120
        timeout = setTimeout(push, speed + jitter)
      } else {
        // Pause then restart
        timeout = setTimeout(() => {
          if (cancelled) return
          setVisible([])
          idx = 0
          timeout = setTimeout(push, 400)
        }, 3000)
      }
    }

    setVisible([])
    idx = 0
    timeout = setTimeout(push, 600)
    return () => {
      cancelled = true
      clearTimeout(timeout)
    }
  }, [lines, speed])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [visible])

  useEffect(() => {
    const id = setInterval(() => setCursor((c) => !c), 530)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className={cn(
        'rounded-xl border border-white/[0.07] bg-[#101010] overflow-hidden font-mono text-xs leading-relaxed',
        className
      )}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.07] bg-[#151515]">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        <span className="ml-auto text-[10px] text-[#404040]">perfmonk — bash</span>
      </div>

      {/* Body */}
      <div className="p-4 h-56 overflow-y-auto space-y-1 scrollbar-none">
        {visible.filter(Boolean).map((line, i) => (
          <div key={i} className={cn('whitespace-pre-wrap', clsStyles[line.cls] || 'text-[#f2f2f2]')}>
            {line.cls === 'cmd' && <span className="text-[#2dd4bf] select-none">$ </span>}
            {line.text}
          </div>
        ))}
        <span className={cn('inline-block w-2 h-4 bg-[#2dd4bf] align-middle', cursor ? 'opacity-100' : 'opacity-0')} />
        <div ref={bottomRef} />
      </div>
    </div>
  )
}
