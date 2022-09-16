import { query } from "express-validator";

import { validateMiddleWare } from "../middleware";

const tweetQueryValidation = [
  query("query")
    .not()
    .isEmpty()
    .withMessage("query cannot be empty")
    .custom(
      (value) => value && JSON.parse(value as string).hasOwnProperty("query")
    )
    .withMessage("Query must contain query property"),

  validateMiddleWare,
];

export { tweetQueryValidation };
