/**
 *  **********************
 *  ****** [Project] *****
 *  **********************
 */

import { getProject } from "@/sanity/sanity-utils";
import Image from "next/image";

type Props = {
   params: { project: string };
}

export default async function Project({ params }: Props) {
   const slug = params.project;
   const project = await getProject(slug);

   return (
      <div id='project-container'>
         {/* heading */}
         <section className="prose project-heading p-8 sm:px-16 sm:py-20">
            <h1>
               {project.name}
            </h1>
         </section>

         {/* fullscreen image*/}
         <section className="project-image">
            <Image
               width={600}
               height={200}
               src={project.image}
               alt={project.imageAlt}
            />
         </section>

         {/* logo */}
         <section className="brand-logo">
            <Image className='brand-logo-img' src='/img/mg_logo_lg.png' width={150} height={200} alt='Mike Gary Brand Logo' />
         </section>
      </div>
   )
}