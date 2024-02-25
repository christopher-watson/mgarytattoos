import { PortableTextBlock } from "sanity";

export type Landing = {
   _id: string;
   _createdAt: Date;
   title: string;
   text1Heading: string;
   text2Heading: string;
   contactHeading: string;
   contactPlaceholder: string;
   contactPlaceholder2: string;
   // contact: PortableTextBlock[];
};