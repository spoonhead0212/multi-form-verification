"use client"
import '../global.css'
import { Providers } from '@/provider/providers'

export default function RootLayout({ children }) {

  const bodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    width: '100%'
  }

  return (
    <html lang="en">
      <body style={bodyStyle}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
