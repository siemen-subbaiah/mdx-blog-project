import BlogPost from '@/components/BlogPost';
import { getAllPosts } from '@/lib/getAllPosts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MDX Blogs',
  description: 'This is an mdx based blog built using Next.js 13',
};

const Homepage = async () => {
  const posts = await getAllPosts();

  return (
    <>
      <h1 className='text-2xl mb-8'>Recent Posts</h1>
      <section className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {posts.map((post) => {
          return <BlogPost key={post.id} post={post} />;
        })}
      </section>
    </>
  );
};

export default Homepage;
