import React, { useEffect } from "react";
import data from "../../__mock__/data.json";
import {
  Card,
  AvatarContainer,
  Tweet,
  TweetContainer,
  UserInfo,
  InfoConatiner,
  CreatedAt,
  TextContainer,
  FeedbackContainer,
  Feedback,
  Followers,
  FollowersContainer,
} from "./style";
import {
  HeartIcon,
  MoreIcon,
  ReplyIcon,
  RetweetIcon,
  ShareIcon,
} from "../../icons/styled-icons";
import UserAvatar from "../common/avatar";
import Title from "../common/Title";
import UserName from "../common/user-name";

const TweetCard: React.FC = () => {
  const clickHandler = (e: any) => {
    const el = e.target.closest("span");
    if (el && e.currentTarget.contains(el)) {
      console.log(el.textContent);
    }
  };

  const hashTag = () => {
    return {
      __html: data.data.text.replaceAll(
        /(#\S+|@\S+)/g,
        "<span  class='hash-mention'>$1</span>"
      ),
    };
  };
  useEffect(() => {
    hashTag();
  }, []);
  const avatarStyle = { height: "70px", width: "70px" };
  return (
    <Card>
      <Tweet>
        <AvatarContainer>
          <UserAvatar url={data.user.profile_image_url} style={avatarStyle} />
        </AvatarContainer>
        <TweetContainer>
          <InfoConatiner>
            <UserInfo>
              <Title title={data.user.name} isVerified={data.user.verified} />
              <UserName userName={data.user.username} />
              <CreatedAt>.Aug 14</CreatedAt>
            </UserInfo>
            <FollowersContainer>
              <Followers>{data.user.public_metrics.followers_count}</Followers>
              ,Followers
            </FollowersContainer>
            <div className="more">
              <MoreIcon />
            </div>
          </InfoConatiner>
          <TextContainer>
            <div onClick={clickHandler} dangerouslySetInnerHTML={hashTag()} />
          </TextContainer>
          <FeedbackContainer>
            <Feedback>
              <ReplyIcon />
              <span>{data.data.public_metrics.reply_count}</span>
            </Feedback>
            <Feedback>
              <RetweetIcon />
              <span>{data.data.public_metrics.retweet_count}</span>
            </Feedback>

            <Feedback>
              <HeartIcon />
              <span>{data.data.public_metrics.like_count}</span>
            </Feedback>

            <Feedback>
              <ShareIcon />
            </Feedback>
          </FeedbackContainer>
        </TweetContainer>
      </Tweet>
    </Card>
  );
};

export default TweetCard;
