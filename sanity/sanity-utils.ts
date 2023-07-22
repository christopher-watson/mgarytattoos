import { Project } from "@/types/Project";
import { Blog } from "@/types/Blog";
import { Landing } from "@/types/Landing";
import { Aftercare } from "@/types/Aftercare";
import { Contact } from "@/types/Contact";
import { createClient, groq } from "next-sanity";

const clientConfig = {
   projectId: 'y7b9sqm4',
   dataset: 'production',
   apiVersion: '2023-05-17',
};

export async function getLandingPage(): Promise<Landing> {
   return createClient(clientConfig).fetch(
      groq`*[_type=="landing"][0]{
         _id,
         _createdAt,
         title,
         content
      }`
   )
};

export async function getAftercarePage(): Promise<Aftercare> {
   return createClient(clientConfig).fetch(
      groq`*[_type=="aftercare"][0]{
         _id,
         _createdAt,
         title,
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
         content
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
         content
      }`,
      { slug }
   );
};

export async function getBlogs(): Promise<Blog[]> {
   return createClient(clientConfig).fetch(
      groq`*[_type=="blog"]{
         _id,
         _createdAt,
         name,
         "slug": slug.current,
         "image": image.asset->url,
         content
      }`
   )
};

export async function getBlog(slug: string): Promise<Blog> {
   return createClient(clientConfig).fetch(
      groq`*[_type=="blog" && slug.current == $slug][0]{
         _id,
         _createdAt,
         name,
         "slug": slug.current,
         "image": image.asset->url,
         content
      }`,
      { slug }
   )
};