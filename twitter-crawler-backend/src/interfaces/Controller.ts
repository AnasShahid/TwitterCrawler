import { Router } from "express";

import { Request } from "express";
interface IController {
  path: string;
  router: Router;
}
interface IResponseModel {
  status: number;
  data: any;
  msg?: string;
  errors?: any;
  init(): this;
  setStatus(status: number): this;
  setMsg(msg: string): this;
  setData(data: any): this;
  setError(label: string, msg: string): this;
  getBody(): {
    status: number;
    data: any;
    msg: string | undefined;
    errors: any;
  };
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
    retweet_count: number;
    reply_count: number;
    like_count: number;
    quote_count: number;
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

export {
  IClientTwitterRequest,
  IController,
  ITwitterDataResponse,
  user,
  IResponseModel,
};
