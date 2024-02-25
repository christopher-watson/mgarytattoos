/**
 *  **********************
 *  ****** Landing *******
 *  **********************
 */

import { getLandingPage } from '@/sanity/sanity-utils';
import { getProjects } from "@/sanity/sanity-utils";
import MasonryGrid from "./(components)/MasonryGrid";
import Image from 'next/image';
import Button from '@mui/material/Button';
import Link from 'next/link';

// import { PortableText } from "@portabletext/react";
// import ContactForm from './(components)/ContactForm';

export default async function Home() {
   const page = await getLandingPage();
   const projects = await getProjects();
   return (
      <div id='home-container'>

         {/* section 1 */}
         <section className='prose text1-section p-8 sm:px-16 sm:py-20'>
            <h1 className='text-center'>{page.text1Heading}</h1>
         </section>

         {/* gallery*/}
         <section className='image1-gallery'>
            <MasonryGrid projects={projects} />
         </section>

         {/* section 2 */}
         <section className='prose text2-section'>
            <h1 className='text-center'>{page.text2Heading}</h1>
            <Link href={'/contact'}>
               <Button variant="contained" className="mt-8 bg-black" type="submit">
                  Contact
               </Button>
            </Link>
         </section>

         {/* logo */}
         <div className="brand-logo-div">
            <Image className='brand-logo-img' src='/img/mg_logo_lg.png' width={150} height={200} alt='Michael Gary Brand Logo' />
         </div>
      </div>
   )
}
