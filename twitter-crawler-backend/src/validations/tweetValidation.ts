import { query } from "express-validator";

import validate from "../middleware/validate";

const tweetQueryValidation = [
  query("query")
    .not()
    .isEmpty()
    .withMessage("query cannot be empty")
    .custom(
      (value) => value && JSON.parse(value as string).hasOwnProperty("query")
    )
    .withMessage("Query must contain query property"),

  validate,
];

export { tweetQueryValidation };
