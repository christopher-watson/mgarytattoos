const project = {
   name: 'project',
   title: 'Projects Collection',
   type: 'document',
   fields: [{
      name: 'name',
      title: 'Name',
      type: 'string'
   }, {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule: any) => Rule.required(),
   }, {
      name: 'image',
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
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
   },
   ],
   orderings: [
      {
         title: 'Publish Date',
         name: 'publishDateAsc',
         by: [
            { field: 'publishedAt', direction: 'asc' }
         ]
      },
   ],
};

export default project;