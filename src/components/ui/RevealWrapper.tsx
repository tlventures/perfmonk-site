import { ReactNode } from 'react'

interface RevealWrapperProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function RevealWrapper({ children, className }: RevealWrapperProps) {
  return <div className={className}>{children}</div>
}
