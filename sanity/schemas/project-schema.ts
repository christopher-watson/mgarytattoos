const project = {
   name: 'project',
   title: 'Projects Page',
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
   }, {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }]
   }]
};

export default project;