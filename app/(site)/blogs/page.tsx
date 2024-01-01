/**
 *  **********************
 *  ******** Blogs *******
 *  **********************
 */

import { getBlogs } from "@/sanity/sanity-utils";
import Link from "next/link";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default async function Blogs() {
   const blogs = await getBlogs();
   return (
      <div className="blogs-container">
         <div className="prose blogs-heading p-8 sm:px-16 sm:py-20">
            <h1>Blogs</h1>
         </div>
         <div className="all-blogs-div">
            {blogs.map((blog, index) => (
               <div key={blog._id} className={`blog blog-${index}`}>
                  <Card sx={{
                     maxWidth: { xs: 250, md: 900 },
                  }}>
                     <CardActionArea className="blog-card">
                        <Link href={`blogs/${blog.slug}`}>
                           <CardMedia
                              component="img"
                              src={blog.image}
                              alt={blog.imageAlt}
                           />
                           <CardContent>
                              <div className="prose">
                                 <h2>{blog.title}</h2>
                              </div>
                              <div className="blog-card-content">
                                 <div className="blog-card-portable-text">{blog.excerpt}</div>
                              </div>
                           </CardContent>
                        </Link>
                     </CardActionArea>
                  </Card>
               </div>
            ))}
         </div>
      </div >
   )
};
