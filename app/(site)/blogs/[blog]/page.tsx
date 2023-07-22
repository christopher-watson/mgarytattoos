import { getBlog } from "@/sanity/sanity-utils";

type Props = {
   params: { blog: string };
}

export default async function Blog({ params }: Props) {
   const slug = params.blog;
   const blog = await getBlog(slug);

   return <div>{blog.name}</div>
}