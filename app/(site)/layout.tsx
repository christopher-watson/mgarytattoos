import DrawerNav from './(components)/DrawerNav';
import '../globals.css'

export const metadata = {
   title: 'Michael Gary Tattoos',
   description: 'Michael Gary Tattoos',
}

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
