import { PortableTextBlock } from "sanity";

export type Aftercare = {
   _id: string;
   _createdAt: Date;
   title: string;
   aftercareImg1: string;
   aftercareImg1Alt: string;
   subtitle: string;
   content: PortableTextBlock[];
};