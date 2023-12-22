"use client"
import { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Button from '@mui/material/Button';

interface ContactFormProps {
   isLandingPage?: boolean
   placeholderText?: string
}

export default function ContactForm(props: ContactFormProps) {
   const { isLandingPage, placeholderText } = props;
   const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM || '');

   // useEffect(() => {
   // console.log();
   // }, []);

   return (
      <div className='contact-form-container'>
         {isLandingPage ? (
            <div className="landing-page-contact-form">
               <form onSubmit={handleSubmit}>
                  <label htmlFor="name">Full Name <span className='required-label text-xs'>(required)</span></label>
                  <input className='rounded-md' id="name" type="text" name="name" />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                  <label htmlFor="email">Email Address <span className='required-label text-xs'>(required)</span></label>
                  <input className='rounded-md' id="email" type="email" name="email" autoComplete="off" />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                  <label htmlFor="message">Message <span className='required-label text-xs'>(required)</span></label>
                  <textarea className='rounded-md placeholder:text-xs' id="message" name="message" placeholder={placeholderText} />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                  {state.succeeded ? (
                     <Button variant="contained" className="mt-8 bg-black" type="submit" disabled>
                        Message Sent! ✅
                     </Button>
                  ) : (
                     <Button variant="contained" className="mt-8 bg-black" type="submit" disabled={state.submitting}>
                        Submit
                     </Button>
                  )}
                  <ValidationError className='contact-form-error' errors={state.errors} />
               </form>
            </div>
         ) : (
            <div className="contact-page-contact-form">
               <form onSubmit={handleSubmit}>
                  <label htmlFor="name">Full Name <span className='required-label text-xs'>(required)</span></label>
                  <input className='rounded-md' id="name" type="text" name="name" />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                  <label htmlFor="email">Email Address <span className='required-label text-xs'>(required)</span></label>
                  <input className='rounded-md' id="email" type="email" name="email" autoComplete="off" />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                  <label htmlFor="message">Message <span className='required-label text-xs'>(required)</span></label>
                  <textarea className='rounded-md placeholder:text-xs' id="message" name="message" placeholder={placeholderText} />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                  {state.succeeded ? (
                     <Button variant="contained" className="mt-8" type="submit" disabled>
                        Message Sent! ✅
                     </Button>
                  ) : (
                     <Button variant="contained" className="mt-8" type="submit" disabled={state.submitting}>
                        Submit
                     </Button>
                  )}
                  <ValidationError className='contact-form-error' errors={state.errors} />
               </form>
            </div>
         )}
      </div>
   );
}

