import { PortableTextBlock } from "sanity";

export type Contact = {
   _id: string;
   _createdAt: Date;
   title: string;
   content: PortableTextBlock[];
};