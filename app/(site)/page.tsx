"use client"
import { getLandingPage } from '@/sanity/sanity-utils'; 
import { PortableText } from "@portabletext/react";
import Image from 'next/image';

export default async function Home() {
   const page = await getLandingPage();
   console.log('home', page);
   return (
      <div id='home-container' className='bg-sky-500'>
         <h1>{page.title}</h1>
         <PortableText value={page.content} />
      </div>
   )
}
