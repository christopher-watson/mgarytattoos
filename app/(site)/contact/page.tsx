/**
 *  **********************
 *  ****** Contact *******
 *  **********************
 */

import { getContactPage, getLandingPage } from '@/sanity/sanity-utils';
import ContactForm from '../(components)/ContactForm';
import LinkIcon from '@mui/icons-material/Link';
import Link from 'next/link';

export default async function Contact() {
   const page = await getContactPage();
   const landing = await getLandingPage()

   return (
      <div className='contact-container'>
         <div className='prose contact-page-content-div'>
            <h1>{page.title}</h1>
            <div>{page.email}</div>
            <div>{page.phone}</div>
            <div>{page.address}</div>
            <Link href={page.link} rel="noopener noreferrer" target="_blank">
               Instagram <LinkIcon />
            </Link>
         </div>
         <div className="prose contact-page-form-div">
            <ContactForm
               placeholderText1={landing.contactPlaceholder}
               placeholderText2={landing.contactPlaceholder2}
            />
         </div>
      </div>
   )
}
