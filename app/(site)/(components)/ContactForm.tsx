"use client"
import { useForm, ValidationError } from "@formspree/react";
import Button from '@mui/material/Button';

interface ContactFormProps {
   isLandingPage?: boolean
   placeholderText1?: string
   placeholderText2?: string
}

export default function ContactForm(props: ContactFormProps) {
   const { isLandingPage, placeholderText1, placeholderText2 } = props;
   const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM || '');

   return (
      <div className='contact-form-container'>
         {isLandingPage ? (
            <div className="landing-page-contact-form">
               <form onSubmit={handleSubmit}>
                  <label htmlFor="first-name">First Name <span className='required-label text-xs'>(required)</span></label>
                  <input className='rounded-md' id="first-name" type="text" name="name" autoComplete="off" />
                  <ValidationError prefix="first-name" field="first-name" errors={state.errors} />
                  <label htmlFor="last-name">Last Name <span className='required-label text-xs'>(required)</span></label>
                  <input className='rounded-md' id="last-name" type="text" name="name" autoComplete="off" />
                  <ValidationError prefix="last-name" field="last-name" errors={state.errors} />
                  <label htmlFor="phone">Phone Number <span className='required-label text-xs'>(required)</span></label>
                  <input className='rounded-md' id="phone" type="tel" name="phone" autoComplete="off" />
                  <ValidationError prefix="phone" field="phone" errors={state.errors} />
                  <label htmlFor="email">Email Address <span className='required-label text-xs'>(required)</span></label>
                  <input className='rounded-md' id="email" type="email" name="email" autoComplete="off" />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                  <label htmlFor="tattoo-idea">Tattoo Idea <span className='required-label text-xs'>(required)</span></label>
                  <textarea className='rounded-md placeholder:text-xs' id="tattoo-idea" name="message" placeholder={placeholderText1} />
                  <ValidationError prefix="Tattoo Idea" field="tattoo-idea" errors={state.errors} />
                  <label htmlFor="location">Tattoo location <span className='required-label text-xs'>(required)</span></label>
                  <textarea className='rounded-md placeholder:text-xs' id="location" name="message" autoComplete="off" placeholder={placeholderText2} />
                  <ValidationError prefix="location" field="location" errors={state.errors} />
                  <>
                     {state.succeeded ? (
                        <Button variant="contained" className="mt-8 bg-black" type="submit" disabled>
                           Message Sent! ✅
                        </Button>
                     ) : (
                        <Button variant="contained" className="mt-8 bg-black" type="submit" disabled={state.submitting}>
                           Submit
                        </Button>
                     )}
                  </>
                  <ValidationError className='contact-form-error' errors={state.errors} />
               </form>
            </div>
         ) : (
            <div className="contact-page-contact-form">
               <form onSubmit={handleSubmit}>
                  <label htmlFor="first-name">First Name <span className='required-label text-xs'>(required)</span></label>
                  <input className='rounded-md' id="first-name" type="text" name="name" autoComplete="off" />
                  <ValidationError prefix="first-name" field="first-name" errors={state.errors} />
                  <label htmlFor="last-name">Last Name <span className='required-label text-xs'>(required)</span></label>
                  <input className='rounded-md' id="last-name" type="text" name="name" autoComplete="off" />
                  <ValidationError prefix="last-name" field="last-name" errors={state.errors} />
                  <label htmlFor="phone">Phone Number <span className='required-label text-xs'>(required)</span></label>
                  <input className='rounded-md' id="phone" type="tel" name="phone" autoComplete="off" />
                  <ValidationError prefix="phone" field="phone" errors={state.errors} />
                  <label htmlFor="email">Email Address <span className='required-label text-xs'>(required)</span></label>
                  <input className='rounded-md' id="email" type="email" name="email" autoComplete="off" />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                  <label htmlFor="tattoo-idea">Tattoo Idea <span className='required-label text-xs'>(required)</span></label>
                  <textarea className='rounded-md placeholder:text-xs' id="tattoo-idea" name="message" placeholder={placeholderText1} />
                  <ValidationError prefix="Tattoo Idea" field="tattoo-idea" errors={state.errors} />
                  <label htmlFor="location">Tattoo location <span className='required-label text-xs'>(required)</span></label>
                  <textarea className='rounded-md placeholder:text-xs' id="location" name="message" autoComplete="off" placeholder={placeholderText2} />
                  <ValidationError prefix="location" field="location" errors={state.errors} />
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
         )}
      </div>
   );
}

