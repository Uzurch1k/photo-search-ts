type Urls = {
  small: string;
  regular: string;
};

type User = {
  name: string;
  instagram_username?: string;
  twitter_username?: string;
};

export type ArrayItem = {
  id: string;
  urls: Urls;
  user: User;
  likes?: number;
  description?: string;
};
