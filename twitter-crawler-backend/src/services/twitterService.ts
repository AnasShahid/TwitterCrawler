import { response } from "../helpers/models";
import { filterTweetData } from "../helpers/generalHelper";

import { ITwitterDataResponse, IClientTwitterRequest } from "../interfaces";

const getUserTweetRecords = async (
  param: string,
  req: IClientTwitterRequest,
  result: any
) => {
  const client = req.client;
  return new Promise((resolve, reject) => {
    client.get(
      "https://api.twitter.com/2/tweets/search/recent",
      param,

      function (error: any, tweets: ITwitterDataResponse, response: Response) {
        try {
          if (error) {
            const { message } = error[0];
            result.setStatus(400).setMsg(message);
            throw result;
          }
          const tweetData = filterTweetData(tweets);
          result
            .setStatus(200)
            .setData(tweetData)
            .setMsg("tweets data fetched successfully");
          resolve(result);
        } catch (err: any) {
          if (!err.status) {
            result.setStatus(500).setMsg("Internal server error");
            reject(result);
          }
          reject(err);
        }
      }
    );
  });
};

export { getUserTweetRecords };
