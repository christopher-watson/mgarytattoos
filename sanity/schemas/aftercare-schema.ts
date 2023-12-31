const aftercare = {
   name: 'aftercare',
   title: 'Aftercare Page',
   type: 'document',
   fields: [
      {
         name: 'title',
         title: 'Title',
         type: 'string'
      },
      {
         name: 'aftercareImg1',
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
   ]
}

export default aftercare;