/**
 *  **********************
 *  ****** Aftercare *****
 *  **********************
 */

import { getAftercarePage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from 'next/image';

export default async function Aftercare() {
   const page = await getAftercarePage();

   return (
      <div id='aftercare-container'>
         {/* heading */}
         <section className="prose aftercare-heading p-8 sm:px-16 sm:py-20">
            <h1>{page.title}</h1>
         </section>

         {/* fullscreen image*/}
         <section className='aftercareImage1-section relative'>
            <Image
               fill
               src={page.aftercareImg1}
               alt={page.aftercareImg1Alt}
            />
         </section>

         <div className="under-aftercare-image">
            {/* subtitle */}
            <section className="prose aftercare-subtitle">
               <h2>{page.subtitle}</h2>
            </section>

            {/* content area */}
            <section className="aftercare-content">
               <PortableText value={page.content} />
            </section>

            {/* logo */}
            <section className="brand-logo">
               <Image className='brand-logo-img' src='/img/mg_logo_lg.png' width={150} height={200} alt='Mike Gary Brand Logo' />
            </section>
         </div>
      </div>
   )
}