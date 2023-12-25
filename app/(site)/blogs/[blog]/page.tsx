/**
 *  **********************
 *  ******** Blog ********
 *  **********************
 */

import { getBlog } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

type Props = {
   params: { blog: string };
}

export default async function Blog({ params }: Props) {
   const slug = params.blog;
   const blog = await getBlog(slug);

   return (
      <div className="blog-container">
         <div className="blog-image-div">
            <Image
               width={600}
               height={200}
               src={blog.image}
               alt={blog.imageAlt}
            />
         </div>
         <div className="blog-center-div">
            <div className="prose blog-date">
               {blog.publishedAt.split("T")[0]}
            </div>
            <div className="prose blog-url">
               <Link href={`https://mikegary.com/blogs/${slug}`}>
                  <i>mikegary.com/blogs/{slug}</i>
               </Link>
            </div>
         </div>
         <div className="prose blog-title">
            <h2>{blog.title}</h2>
         </div>
         <div className="prose blog-content">
            <PortableText value={blog.content} />
         </div>

         {/* logo */}
         <section className="brand-logo">
            <Image className='brand-logo-img' src='/img/mg_logo_lg.png' width={150} height={200} alt='Mike Gary Brand Logo' />
         </section>
      </div>
   )

}