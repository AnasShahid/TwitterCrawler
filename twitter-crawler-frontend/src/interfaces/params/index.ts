export interface IParams {
  query: string;
  [expansions: string]: any;
  "tweet.fields": string;
  "user.fields": string;
}
