/**
 *  **********************
 *  ****** Landing *******
 *  **********************
 */

import { getLandingPage } from '@/sanity/sanity-utils';
import { PortableText } from "@portabletext/react";
import Image from 'next/image';
import ContactForm from './(components)/ContactForm';

export default async function Home() {
   const page = await getLandingPage();
   return (
      <div id='home-container'>
         {/* hero */}
         <div className="home-hero bg-[url('/img/mg_background.png')] bg-center bg-cover"></div>

         {/* section 1 */}
         <section className='prose text1-section p-8 sm:px-16 sm:py-20'>
            <h1 className='text-center md:text-left'>{page.text1Heading}</h1>
            <PortableText value={page.text1} />
         </section>

         {/* wide image*/}
         <section className='image1-section relative'>
            <Image
               fill
               src={page.img1}
               alt={page.img1alt}
            />
         </section>

         {/* section 2 */}
         <section className='prose text2-section p-8 sm:px-16 sm:py-20 min-h-fit'>
            <h1 className='text-center md:text-left'>{page.text2Heading}</h1>
            <PortableText value={page.text2} />
         </section>

         {/* contact */}
         <section className="prose contact-section bg-[url('/img/mg_back_tattoo.jpeg')] bg-center bg-cover  p-8 sm:px-16 sm:py-20 min-h-fit">
            <div className='contact-blur backdrop-blur-lg py-8'>
               <h1 className='text-center'>{page.contactHeading}</h1>
               <PortableText value={page.contact} />
               <ContactForm
                  isLandingPage
                  placeholderText1={page.contactPlaceholder}
                  placeholderText2={page.contactPlaceholder2}
               />
            </div>
         </section>
      </div>
   )
}
