import MuiTheme from '@/components/mui/MuiTheme'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })
const nunito = Nunito({ subsets: ['latin'], variable: '--nunito' })

export const metadata: Metadata = {
  title: 'Find a Friend',
  keywords: ['adopt', 'animal', 'shelter', 'dog', 'cat', 'pet', 'adoção'],
  description:
    'Find your best friend today! Adopt an animal from a local shelter.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${nunito.variable} bg-FindAfriendRed text-slate-50`}
      >
        <MuiTheme>{children}</MuiTheme>
      </body>
    </html>
  )
}
