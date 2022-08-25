export interface User {
  id: string;
  verified: boolean;
  profile_image_url: string;
  name: string;
  description: string;
  public_metrics: {
    followers_count: number;
    following_count: number;
    tweet_count: number;
    listed_count: number;
  };
  username: string;
}

export interface Tweet {
  created_at: string;
  reply_settings: string;
  possibly_sensitive: boolean;
  attachments: {
    media_keys: string[];
  };
  lang: string;
  entities: {
    urls: {
      start: number;
      end: number;
      url: string;
      expanded_url: string;
      display_url: string;
      media_key: string;
    }[];
    mentions: {
      start: number;
      end: number;
      username: string;
      id: string;
    }[];
    hashtags: {
      start: number;
      end: number;
      tag: string;
    }[];
  };
  public_metrics: {
    retweet_count: number;
    reply_count: number;
    like_count: number;
    quote_count: number;
  };
  text: string;
  id: string;
  source: string;
  author_id: string;
  conversation_id: string;
}

export interface TweetInfo {
  user: User;
  tweet: Tweet;
}
