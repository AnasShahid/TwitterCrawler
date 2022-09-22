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
export interface TweetInfo {
  author: User;
  created_at: string;
  public_metrics: {
    retweet_count: number;
    reply_count: number;
    like_count: number;
    quote_count: number;
  };
  text: string;
  id: string;
  author_id: string;
}

// export type TweetInfo = {
//   user: User;
//   tweet: Tweet;
// };
