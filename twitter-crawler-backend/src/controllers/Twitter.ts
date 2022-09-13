import { Router, Response, NextFunction } from "express";
import { response } from "../helpers/models";
import { getUserTweetRecords } from "../services/twitterService";
import { IClientTwitterRequest } from "../interfaces";
import { tweetQueryValidation } from "../validations/tweetValidation";
class TweetController {
  public path: string = "/api/twitter";
  public router: Router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes = () => {
    this.router.get(
      `${this.path}/search`,
      tweetQueryValidation,
      this.getUserTweetData
    );
  };

  getUserTweetData = async (
    req: IClientTwitterRequest,
    res: Response,
    next: NextFunction
  ) => {
    let result = new response();
    try {
      const client = req.client;

      const param = JSON.parse(req.query.query as string);

      await getUserTweetRecords(param, req, result);

      return res.status(result.status).json(result.getBody());
    } catch (err: any) {
      if (err.status) {
        next(err);
      } else {
        result.setStatus(500).setMsg("Internal server error");
        next(result);
      }
    }
  };
}

export default TweetController;
