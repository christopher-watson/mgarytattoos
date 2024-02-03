const landing = {
   name: 'landing',
   title: 'Landing Page',
   type: 'document',
   fields: [
      {
         name: 'title',
         title: 'Title',
         type: 'string'
      },
      {
         name: 'text1Heading',
         title: 'Text Area 1 Heading',
         type: 'string'
      },
      {
         name: 'text2Heading',
         title: 'Text Area 2 Heading',
         type: 'string'
      },
      {
         name: 'contactHeading',
         title: 'Contact Heading',
         type: 'string'
      },
      // {
      //    name: 'contact',
      //    title: 'Contact Area',
      //    type: 'array',
      //    of: [{ type: "block" }]
      // },
      {
         name: 'contactPlaceholder',
         title: 'Tattoo Idea Text',
         type: 'string'
      },
      {
         name: 'contactPlaceholder2',
         title: 'Tattoo Location Text',
         type: 'string'
      }
   ]
}

export default landing;