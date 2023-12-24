const about = {
   name: 'about',
   title: 'About Page',
   type: 'document',
   fields: [
      {
         name: 'title',
         title: 'Title',
         type: 'string'
      },
      {
         name: 'aboutImg1',
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
         name: 'subtitle',
         title: 'Subtitle',
         type: 'string'
      },
      {
         name: 'content',
         title: 'Content',
         type: 'array',
         of: [{ type: "block" }]
      },
      // {
      //    name: 'aboutImg2',
      //    title: 'Image 2',
      //    type: 'image',
      //    options: { hotspot: true },
      //    fields: [{
      //       name: 'alt',
      //       title: 'Alt',
      //       type: 'string'
      //    }]
      // },
   ]
}

export default about;