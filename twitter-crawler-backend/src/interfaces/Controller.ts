import { Router } from "express";

import { Request } from "express";
interface IController {
  path: string;
  router: Router;
}

interface IClientTwitterRequest extends Request {
  [client: string]: any;
}

interface ITwitterDataResponse {
  data: Array<authorDescription>;
  includes: {
    users: Array<user>;
  };
  meta: {
    newest_id: string;
    oldest_id: string;
    result_count: number;
    next_token: string;
  };
}

interface authorDescription {
  author_id: string;
  id: string;
  text: string;
  created_at: string;
  public_metrics: {
    retweet_count: string;
    reply_count: string;
    like_count: string;
    quote_count: string;
  };
  author: {
    id: string;
    name: string;
    description: string;
    verified: boolean;
    profile_image_url: string;
    public_metrics: {
      followers_count: number;
      following_count: number;
      tweet_count: number;
      listed_count: number;
    };
    username: string;
  };
}

interface user {
  id: string;
  name: string;
  description: string;
  verified: boolean;
  profile_image_url: string;
  public_metrics: {
    followers_count: number;
    following_count: number;
    tweet_count: number;
    listed_count: number;
  };
  username: string;
}

export { IClientTwitterRequest, IController, ITwitterDataResponse, user };
