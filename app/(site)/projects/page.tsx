/**
 *  **********************
 *  ****** Projects ******
 *  **********************
 */

import { getProjects } from "@/sanity/sanity-utils";
import MasonryGrid from "../(components)/MasonryGrid";

export default async function Projects() {
   const projects = await getProjects();

   return (
      <div id='projects-container'>
         <section className="prose projects-heading p-8 sm:px-16 sm:py-20">
            <h1>Projects</h1>
         </section>
         <MasonryGrid projects={projects} />
      </div>
   )
}