import { PortableTextBlock } from "sanity";

export type Blog = {
   _id: string;
   _createdAt: Date;
   title: string;
   slug: string;
   image: string;
   imageAlt: string;
   excerpt: string;
   publishedAt: string;
   content: PortableTextBlock[];
};