import { Project } from "@/types/Project";
// import { Blog } from "@/types/Blog";
import { Landing } from "@/types/Landing";
import { About } from "@/types/About";
import { Aftercare } from "@/types/Aftercare";
import { Contact } from "@/types/Contact";
import { createClient, groq } from "next-sanity";

const clientConfig = {
   // projectId: 'y7b9sqm4',
   projectId: 'iu1qj99p',
   dataset: 'production',
   apiVersion: '2023-05-17',
};

export async function getLandingPage(): Promise<Landing> {
   return createClient(clientConfig).fetch(
      groq`*[_type=="landing"][0]{
         _id,
         _createdAt,
         title,
         text1Heading,
         text2Heading,
         contactHeading,
         contactPlaceholder,
         contactPlaceholder2,
      }`
   )
};

export async function getAboutPage(): Promise<About> {
   return createClient(clientConfig).fetch(
      groq`*[_type=="about"][0]{
         _id,
         _createdAt,
         title,
         "aboutImg1": aboutImg1.asset->url,
         "aboutImg1Alt": aboutImg1.alt,
         content,
         subtitle,
      }`
   )
};

export async function getAftercarePage(): Promise<Aftercare> {
   return createClient(clientConfig).fetch(
      groq`*[_type=="aftercare"][0]{
         _id,
         _createdAt,
         title,
         "aftercareImg1": aftercareImg1.asset->url,
         "aftercareImg1Alt": aftercareImg1.alt,
         subtitle,
         content
      }`
   )
};

export async function getContactPage(): Promise<Contact> {
   return createClient(clientConfig).fetch(
      groq`*[_type=="contact"][0]{
         _id,
         _createdAt,
         title,
         email,
         phone,
         address,
         link,
         contactPlaceholder,
         contactPlaceholder2
      }`
   )
};

export async function getProjects(): Promise<Project[]> {
   return createClient(clientConfig).fetch(
      groq`*[_type=="project"]{
         _id,
         _createdAt,
         name,
         "slug": slug.current,
         "image": image.asset->url,
         content
      }`
   )
};

export async function getProject(slug: string): Promise<Project> {
   return createClient(clientConfig).fetch(
      groq`*[_type=="project" && slug.current == $slug][0]{
         _id,
         _createdAt,
         name,
         "slug": slug.current,
         "image": image.asset->url,
         "imageAlt": image.alt,
         content
      }`,
      { slug }
   );
};

// export async function getBlogs(): Promise<Blog[]> {
//    return createClient(clientConfig).fetch(
//       groq`*[_type=="blog"] | order(publishedAt asc){
//          _id,
//          _createdAt,
//          title,
//          "slug": slug.current,
//          "image": image.asset->url,
//          "imageAlt": image.alt,
//          "excerpt": array::join(string::split((pt::text(content)), "")[0..120], "") + "...",
//          content
//       }`
//    )
// };

// export async function getBlog(slug: string): Promise<Blog> {
//    return createClient(clientConfig).fetch(
//       groq`*[_type=="blog" && slug.current == $slug][0]{
//          _id,
//          _createdAt,
//          title,
//          "slug": slug.current,
//          "image": image.asset->url,
//          "imageAlt": image.alt,
//          content,
//          publishedAt
//       }`,
//       { slug }
//    )
// };