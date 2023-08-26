export const getSinglePostFromGithub = async (
  filePath: string
): Promise<string> => {
  const res = await fetch(
    `https://raw.githubusercontent.com/siemen-subbaiah/mdx-blog-posts/main/${filePath}`,
    {
      next: {
        revalidate: 10,
      },
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    }
  );

  return await res.text();
};

export const getAllPostsFromGithub = async (): Promise<GithubTree> => {
  const res = await fetch(
    'https://api.github.com/repos/siemen-subbaiah/mdx-blog-posts/git/trees/main?recursive=1',
    {
      next: {
        revalidate: 10,
      },
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    }
  );

  return await res.json();
};
