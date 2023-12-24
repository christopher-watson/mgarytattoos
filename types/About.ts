import { PortableTextBlock } from "sanity";

export type About = {
   _id: string;
   _createdAt: Date;
   title: string;
   aboutImg1: string;
   aboutImg1Alt: string;
   subtitle: string;
   content: PortableTextBlock[];
   // aboutImg2: string;
   // aboutImg2Alt: string;
};