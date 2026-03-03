import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] flex flex-col items-center justify-center px-6 text-center">
      <p className="text-7xl font-bold text-[#1a1a1a] mb-4">404</p>
      <h1 className="text-2xl font-semibold text-[#f2f2f2] mb-3">Page not found</h1>
      <p className="text-[#808080] mb-8 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#2dd4bf] text-[#0c0c0c] font-semibold rounded-lg hover:bg-[#2dd4bf]/90 transition-colors"
      >
        Back to home
      </Link>
    </div>
  )
}
