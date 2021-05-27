export interface BlogPost {
  description: string;
  date: number;
  slug: string;
  tags: string;
  title: string;
}

export interface Work {
  name: string;
  url: string;
  category: string;
  description: string;
  categories?: string[];
}
