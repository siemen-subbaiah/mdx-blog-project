import BlogPost from '@/components/BlogPost';
import { getAllPosts } from '@/lib/getAllPosts';
import { Metadata } from 'next';
import React from 'react';

type Params = {
  params: { tag: string };
};

export const generateMetadata = async ({
  params,
}: Params): Promise<Metadata> => {
  return {
    title: `#${params.tag} posts`,
  };
};

const TagPage = async ({ params }: Params) => {
  const posts = await getAllPosts();
  const filteredPosts = posts.filter((post) => post.tags.includes(params.tag));

  return (
    <>
      <h1 className='text-2xl mb-8'>
        <span className='mx-1 text-[#0070f3] bg-[#2A2A28] rounded-md py-[0.12rem] px-1'>
          #{params.tag}
        </span>{' '}
        Posts
      </h1>
      <section className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {filteredPosts.map((post) => {
          return <BlogPost key={post.id} post={post} />;
        })}
      </section>
    </>
  );
};

export default TagPage;
