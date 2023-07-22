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
         name: 'content',
         title: 'Content',
         type: 'array',
         of: [{ type: "block" }]
      }
   ]
}

export default landing;