import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
   title: 'Michael Gary Tattoos',
   description: 'Michael Gary Tattoos',
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <body style={{ marginTop: 0 }} className={inter.className}>{children}</body>
      </html>
   )
}
