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
         name: 'content',
         title: 'Content',
         type: 'array',
         of: [{ type: "block" }]
      }
   ]
}

export default aftercare;