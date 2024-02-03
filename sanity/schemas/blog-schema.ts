// const blog = {
//    name: 'blog',
//    title: 'Blogs Collection',
//    type: 'document',
//    fields: [{
//       name: 'title',
//       title: 'Title',
//       type: 'string'
//    }, {
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: { source: 'title' },
//       validation: (Rule: any) => Rule.required(),
//    }, {
//       name: 'image',
//       title: 'Image',
//       type: 'image',
//       options: { hotspot: true },
//       fields: [{
//          name: 'alt',
//          title: 'Alt',
//          type: 'string'
//       }]
//    }, {
//       name: 'content',
//       title: 'Content',
//       type: 'array',
//       of: [{ type: 'block' }]
//    },
//    {
//       name: 'publishedAt',
//       title: 'Published at',
//       type: 'datetime',
//    },
//    ],
//    orderings: [
//       {
//          title: 'Publish Date',
//          name: 'publishDateAsc',
//          by: [
//             { field: 'publishedAt', direction: 'asc' }
//          ]
//       },
//    ],
// };

// export default blog;