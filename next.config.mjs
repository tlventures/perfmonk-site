import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Silence the workspace root detection warning
  outputFileTracingRoot: __dirname,
  images: {
    domains: [],
  },
}

export default nextConfig
