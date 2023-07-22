"use client"
import { getAftercarePage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from 'next/image';

export default async function Aftercare() {
   const page = await getAftercarePage ();
   console.log('aftercare', page);
   return (
      <div>
         <h1>{page.title}</h1>
         <PortableText value={page.content} />
      </div>
   )
}