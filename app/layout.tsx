import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EZAlgo Landing Page',
  description: 'Welcome to EZAlgo - Your Algorithm Learning Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 