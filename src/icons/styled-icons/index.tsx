import { Comment } from "@styled-icons/evil/Comment";
import { Retweet } from "@styled-icons/evil/Retweet";
import { Heart } from "@styled-icons/bootstrap/Heart";
import { Share } from "@styled-icons/boxicons-regular/Share";
import { MoreHorizontal } from "@styled-icons/evaicons-solid/MoreHorizontal";
import { Verified } from "@styled-icons/material/Verified";

import styled from "styled-components";
export const ReplyIcon = styled(Comment)`
  width: 40px;
  margin-right: 10px;
  &:hover {
    color: #38b2f0;
    cursor: pointer;
  }
`;
export const RetweetIcon = styled(Retweet)`
  width: 40px;
  margin-right: 10px;
  &:hover {
    color: #38b2f0;
    cursor: pointer;
  }
`;
export const HeartIcon = styled(Heart)`
  width: 30px;
  margin-right: 10px;
  &:hover {
    color: #38b2f0;
    cursor: pointer;
  }
`;

export const ShareIcon = styled(Share)`
  width: 40px;
  margin-right: 10px;
  &:hover {
    color: #38b2f0;
    cursor: pointer;
  }
`;
export const MoreIcon = styled(MoreHorizontal)`
  width: 40px;
  &:hover {
    color: #38b2f0;
    cursor: pointer;
  }
`;
export const VerifiedIcon = styled(Verified)`
  width: 20px;
  margin-left: 5px;
  color: #38b2f0;
`;
