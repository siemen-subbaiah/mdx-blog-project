import { compileMDX } from 'next-mdx-remote/rsc';
import { getSinglePostFromGithub } from './fetchPosts';

export const getSinglePost = async (title: string) => {
  const mdxContent = await getSinglePostFromGithub(`${title}.mdx`);
  const { content, frontmatter } = await compileMDX<{
    title: string;
    date: string;
    banner: string;
    description: string;
    tags: Array<string>;
  }>({
    source: mdxContent,
    options: {
      parseFrontmatter: true,
    },
  });

  const returnValue = {
    frontmatter: {
      title: frontmatter.title,
      banner: frontmatter.banner,
      date: frontmatter.date,
      tags: frontmatter.tags,
      description: frontmatter.description,
    },
    content,
  };

  return returnValue;
};
