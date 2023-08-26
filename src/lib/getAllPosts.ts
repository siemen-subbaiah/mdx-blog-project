import { compileMDX } from 'next-mdx-remote/rsc';
import { getAllPostsFromGithub, getSinglePostFromGithub } from './fetchPosts';

export const getAllPosts = async (): Promise<PostMeta[]> => {
  const githubFiles = await getAllPostsFromGithub();

  const mdxFiles = githubFiles.tree
    .filter((file) => file.path.includes('.mdx'))
    .map((file) => file.path);

  const allPostsMeta: PostMeta[] = [];

  for (const mdx of mdxFiles) {
    const mdxContent = await getSinglePostFromGithub(mdx);
    const { frontmatter } = await compileMDX<{
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
    allPostsMeta.push({
      id: Date.now(),
      title: frontmatter.title,
      date: frontmatter.date,
      banner: frontmatter.banner,
      description: frontmatter.description,
      tags: frontmatter.tags,
    });
  }

  return allPostsMeta.sort((a, b) => (a.date < b.date ? 1 : -1));
};
