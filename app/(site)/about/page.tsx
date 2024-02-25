/**
 *  **********************
 *  ****** About *****
 *  **********************
 */

import { getAboutPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from 'next/image';

export default async function About() {
   const page = await getAboutPage();
   return (
      <div id='about-container'>
         {/* heading */}
         <section className="prose about-heading p-8 sm:px-16 sm:py-20">
            <h1>{page.title}</h1>
         </section>

         {/* fullscreen image*/}
         <section className='aboutImage1-section relative'>
            <Image
               fill
               src={page.aboutImg1}
               alt={page.aboutImg1Alt}
            />
         </section>

         <div className="under-about-image">
            {/* subtitle */}
            <section className="prose about-subtitle">
               <h2>{page.subtitle}</h2>
            </section>

            {/* content area */}
            <section className="about-content">
               <PortableText value={page.content} />
            </section>
            
            {/* logo */}
            <section className="brand-logo">
               <Image className='brand-logo-img' src='/img/mg_logo_lg.png' width={150} height={200} alt='Michael Gary Brand Logo' />
            </section>
         </div>
      </div>
   )
}