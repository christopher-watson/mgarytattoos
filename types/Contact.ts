import { PortableTextBlock } from "sanity";

export type Contact = {
   _id: string;
   _createdAt: Date;
   title: string;
   email: string;
   phone: string;
   address: string;
   link: URL;
};