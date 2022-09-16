import { Response, NextFunction } from "express";
const CONFIG = require("../../config/config");
const Twitter = require("twitter");
import { IClientTwitterRequest } from "../interfaces";
export const twitterClientAuth = function (
  req: IClientTwitterRequest,
  res: Response,
  next: NextFunction
) {
  const client = new Twitter({
    consumer_key: CONFIG.APIKEY,
    consumer_secret: CONFIG.APISECRET,
    access_token_key: CONFIG.ACCESSTOKEN,
    access_token_secret: CONFIG.ACCESSTOKENSECRET,
  });
  req.client = client;
  next();
};
