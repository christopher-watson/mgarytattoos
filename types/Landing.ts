import { PortableTextBlock } from "sanity";

export type Landing = {
   _id: string;
   _createdAt: Date;
   title: string;
   text1Heading: string;
   text1: PortableTextBlock[];
   img1: string;
   img1alt: string;
   text2Heading: string;
   text2: PortableTextBlock[];
   contactHeading: string;
   contactPlaceholder: string;
   contact: PortableTextBlock[];
};