interface GithubTree {
  sha: string;
  url: string;
  tree: Tree[];
  truncated: boolean;
}

interface Tree {
  path: string;
  mode: string;
  type: string;
  sha: string;
  size?: number;
  url: string;
}
