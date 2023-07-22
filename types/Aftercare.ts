import { PortableTextBlock } from "sanity";

export type Aftercare = {
   _id: string;
   _createdAt: Date;
   title: string;
   content: PortableTextBlock[];
};