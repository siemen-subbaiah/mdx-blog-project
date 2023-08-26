import { getImgKey } from '@/helpers/imgKey';
import { slugify } from '@/helpers/slugify';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogPost = ({ post }: { post: PostMeta }) => {
  const imgKey = getImgKey(post.banner);

  return (
    <section className='border border-gray-500 rounded-md'>
      <Link href={`/${slugify(post.title)}`}>
        <div style={{ height: '225px', position: 'relative' }}>
          <Image
            src={`https://raw.githubusercontent.com/siemen-subbaiah/mdx-blog-posts/main/${imgKey}`}
            alt={post.title}
            fill
            className='rounded-t-md'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='p-3 my-2'>
          <h1 className='text-xl mb-2'>{post.title}</h1>
          <p>{post.description}</p>
        </div>
      </Link>
    </section>
  );
};

export default BlogPost;
