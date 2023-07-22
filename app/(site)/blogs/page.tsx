import { getBlogs } from "@/sanity/sanity-utils";

export default async function Blogs() {
   const blogs = await getBlogs();
   return (
      <div>
         <h1>My Blogs</h1>
         <div>
            {blogs.map((blog) => (
               <div key={blog._id}> {blog.name}</div>
            ))}
         </div>
      </div >
   )
};