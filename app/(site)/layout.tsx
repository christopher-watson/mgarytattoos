"use client"

import DrawerNav from './(components)/DrawerNav';
import '../globals.css'

export default function RootLayout({
   children,
}: {
   children: React.ReactNode,
}) {
   return (
      <html lang="en">
         <body>
            <main>
               <DrawerNav />
               {children}
            </main>
         </body>
      </html>
   )
}
