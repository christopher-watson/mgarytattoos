const contact = {
   name: 'contact',
   title: 'Contact Page',
   type: 'document',
   fields: [
      {
         name: 'title',
         title: 'Title',
         type: 'string'
      },
      {
         name: 'content',
         title: 'Content',
         type: 'array',
         of: [{ type: "block" }]
      }
   ]
}

export default contact;