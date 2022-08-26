import React from "react";
import { Whisper } from "rsuite";
import "rsuite/dist/rsuite.css";
import { User } from "../../../interfaces/components/tweet-card/index";
import { hashTagHighlighter } from "../../../utils/helper";
import UserAvatar from "../avatar";
import Title from "../title";
import {
  AddToAnalysisButton,
  AvatarContainer,
  Connections,
  PopOverBody,
  PopOverHeader,
  TextContainer,
  UserDetails,
  UserDiscription,
} from "./style";

const avatarStyle = { height: "70px", width: "70px" };

export const speaker = (user: User) => (
  <UserDetails>
    <PopOverHeader>
      <AvatarContainer>
        <UserAvatar url={user.profile_image_url} style={avatarStyle} />
      </AvatarContainer>
      <AddToAnalysisButton>Add to Analysis</AddToAnalysisButton>
    </PopOverHeader>
    <PopOverBody>
      <Title title={user.name} isVerified={user.verified} />
      <h4>@{user.username}</h4>
      <UserDiscription>
        <TextContainer>
          <div dangerouslySetInnerHTML={hashTagHighlighter(user.description)} />
        </TextContainer>
      </UserDiscription>
      <Connections>
        <div>
          {user.public_metrics.followers_count} <span>Followers</span>
        </div>
        <div>
          {user.public_metrics.following_count} <span>Following</span>
        </div>
      </Connections>
    </PopOverBody>
  </UserDetails>
);

const PopOver: React.FC<{ user: User; children: any }> = ({
  user,
  children,
}) => {
  return (
    <Whisper
      placement="bottom"
      trigger="hover"
      controlId="control-id-hover-enterable"
      speaker={speaker(user)}
      enterable
    >
      {children}
    </Whisper>
  );
};

export default PopOver;
