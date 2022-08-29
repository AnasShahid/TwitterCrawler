import React from "react";
import { useDispatch } from "react-redux";
import { Whisper } from "rsuite";
import "rsuite/dist/rsuite.css";
import { User, UserPopOver } from "../../../interfaces";
import { addUserToAnalysis } from "../../../store/modules/tweet/analysis/action";
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

const PopOver: React.FC<UserPopOver> = ({ user, children }) => {
  const dispatch = useDispatch();
  const onAddTOAnalysis = (user: User) => {
    dispatch(addUserToAnalysis(user));
  };
  const popOverSpeaker = (user: User) => {
    return (
      <UserDetails>
        <PopOverHeader>
          <AvatarContainer>
            <UserAvatar url={user.profile_image_url} />
          </AvatarContainer>
          <AddToAnalysisButton
            onClick={() => {
              onAddTOAnalysis(user);
            }}
          >
            Add to Analysis
          </AddToAnalysisButton>
        </PopOverHeader>
        <PopOverBody>
          <Title title={user.name} isVerified={user.verified} />
          <h4>@{user.username}</h4>
          <UserDiscription>
            <TextContainer>
              <div
                dangerouslySetInnerHTML={hashTagHighlighter(user.description)}
              />
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
  };
  return (
    <Whisper
      placement="bottom"
      trigger="hover"
      controlId="control-id-hover-enterable"
      speaker={popOverSpeaker(user)}
      enterable
    >
      {children}
    </Whisper>
  );
};

export default PopOver;
