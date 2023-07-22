import { PortableTextBlock } from "sanity";

export type Landing = {
   _id: string;
   _createdAt: Date;
   title: string;
   content: PortableTextBlock[];
};