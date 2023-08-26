import { getImgKey } from '@/helpers/imgKey';
import { slugify } from '@/helpers/slugify';
import { getAllPosts } from '@/lib/getAllPosts';
import { getSinglePost } from '@/lib/getSinglePost';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { notFound } from 'next/navigation';
type Params = {
  params: { slug: string };
};

// MetaData
export const generateMetadata = async ({
  params,
}: Params): Promise<Metadata> => {
  const { frontmatter } = await getSinglePost(params.slug);

  if (!frontmatter) {
    return {
      title: 'Post Not found',
    };
  }

  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
};

// Generate new blog posts
export const generateStaticParams = async () => {
  const posts = await getAllPosts();

  if (!posts) return [];

  return posts.map((post) => ({
    slug: slugify(post.title),
  }));
};

const BlogSinglepage = async ({ params }: Params) => {
  const post = await getSinglePost(params.slug);

  console.log(params.slug);

  if (!post) notFound();

  const { content, frontmatter } = post;

  const imgKey = getImgKey(frontmatter.banner);

  return (
    <>
      <section className='mt-5'>
        <Link href='/' className='text-[#0070f3]'>
          Back to Blog
        </Link>
      </section>
      <h1 className='text-3xl mb-5 mt-5'>{frontmatter.title}</h1>
      <Image
        src={`https://raw.githubusercontent.com/siemen-subbaiah/mdx-blog-posts/main/${imgKey}`}
        alt={frontmatter.title}
        height={500}
        width={500}
        className='rounded-t-md mb-4'
      />
      <p className='mb-5'>{frontmatter.date}</p>
      <section className='grid grid-cols-1 md:grid-cols-12'>
        <article className='prose prose-slate prose-lg prose-headings:text-white prose-p:text-white col-span-10'>
          {content}
        </article>
        <div className='col-span-2 md:border-l md:border-l-gray-400 md:pl-5'>
          <h1 className='text-md text-gray-400 mb-2 mt-2 md:mt-0'>Tags :</h1>
          <div className='flex flex-row'>
            {frontmatter.tags.map((tag, i) => {
              return (
                <Link
                  href={`/tags/${tag}`}
                  key={i}
                  className='mx-1 text-[#0070f3] bg-[#2A2A28] rounded-md py-[0.12rem] px-1'
                >
                  #{tag}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSinglepage;
