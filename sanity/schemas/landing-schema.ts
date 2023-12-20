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
         name: 'text1',
         title: 'Text Area 1',
         type: 'array',
         of: [{ type: "block" }]
      },
      {
         name: 'img1',
         title: 'Image',
         type: 'image',
         options: { hotspot: true },
         fields: [{
            name: 'alt',
            title: 'Alt',
            type: 'string'
         }]
      },
      {
         name: 'text2Heading',
         title: 'Text Area 2 Heading',
         type: 'string'
      },
      {
         name: 'text2',
         title: 'Text Area 2',
         type: 'array',
         of: [{ type: "block" }]
      },
      {
         name: 'contactHeading',
         title: 'Contact Heading',
         type: 'string'
      },
      {
         name: 'contact',
         title: 'Contact Area',
         type: 'array',
         of: [{ type: "block" }]
      },
   ]
}

export default landing;