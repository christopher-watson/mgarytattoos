/**
 *  ***********************
 *  ****** Proj 404 *******
 *  ***********************
 */

import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
   return (
      <div className='not-found-container prose'>
         <h1>Page Not Found</h1>
         <p>The project you are looking for could not be found</p>
         <Link href={'/projects'}>
            Return to Projects
         </Link>
         {/* logo */}
         <section className="brand-logo">
            <Image className='brand-logo-img' src='/img/mg_logo_lg.png' width={150} height={200} alt='Mike Gary Brand Logo' />
         </section>
      </div>
   )
}
