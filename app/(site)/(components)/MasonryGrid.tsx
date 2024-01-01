/* eslint-disable @next/next/no-img-element */
"use client"
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import Link from 'next/link';

interface MasonryGridProps {
   projects?: any;
}

export default function MasonryGrid(props: MasonryGridProps) {
   const { projects } = props;

   return (
      <div id="masonry-map-container">
         <Box className='masonry-map-div'>
            <Masonry
               columns={{ xs: 2, md: 3, lg: 4 }}
               spacing={2}
            >
               {projects.map((item: any, index: any) => (
                  <div key={index}>
                     <Link href={`/projects/${item.slug}`}>
                        <img
                           src={item.image}
                           alt={item.title}
                           loading="lazy"
                           style={{
                              borderBottomLeftRadius: 4,
                              borderBottomRightRadius: 4,
                              display: 'block',
                              width: '100%',
                           }}
                        />
                     </Link>
                  </div>
               ))}
            </Masonry>
         </Box>
      </div>
   )
}