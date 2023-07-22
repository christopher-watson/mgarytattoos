import { getProjects } from "@/sanity/sanity-utils";

export default async function Projects() {
   const projects = await getProjects();

   return (
      <div>
         <h1>Projects</h1>
         <div>
            {projects.map((proj) => (
               <div key={proj._id}>{proj.name}</div>
            ))}
         </div>
      </div>
   )
}