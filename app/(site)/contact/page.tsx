// "use client"
/**
 *  **********************
 *  ****** Contact *******
 *  **********************
 */

import { getContactPage } from '@/sanity/sanity-utils';
import ContactForm from '../(components)/ContactForm';
import LinkIcon from '@mui/icons-material/Link';
import Link from 'next/link';
import Image from 'next/image';

export default async function Contact() {
   const page = await getContactPage();
   // console.log('contact', page);
   return (
      <div className='contact-container'>
         <div className='prose contact-page-content-div'>
            <h1>{page.title}</h1>
            <div>{page.email}</div>
            <div>{page.phone}</div>
            <div>{page.address}</div>
            <Link href={page.link}>
               <LinkIcon />
            </Link>
         </div>
         <div className="prose contact-page-form-div">
            <ContactForm />
         </div>
      </div>
   )
}
