"use client"
import { getContactPage } from '@/sanity/sanity-utils'; 
import { PortableText } from "@portabletext/react";
import Image from 'next/image';

export default async function Contact() {
   const page = await getContactPage();
   console.log('contact', page);
   return (
      <div>
         <h1>{page.title}</h1>
         <PortableText value={page.content} />
      </div>
   )
}
