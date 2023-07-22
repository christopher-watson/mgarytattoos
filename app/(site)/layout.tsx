import Link from 'next/link'
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
         <body className={inter.className}>
            <nav id='mg-nav' className='pl-5 mg-navbar bg-pink-200 h-14 xl:bg-red-500 xl:h-32 xl:pl-20'>
               <div className="mg-navbar-home">
                  <Link href='/'>Mike Gary Tattoos</Link>
               </div>
               <div className="mg-navbar-links">
                  <Link href='/aftercare'>Aftercare</Link>
                  <Link href='/blogs'>Blog</Link>
                  <Link href='/contact'>Contact</Link>
                  <Link href='/projects'>Projects</Link>
               </div>
            </nav>

            <main>
               {children}
            </main>
         </body>
      </html>
   )
}
