import React from "react";
import {
  HeartIcon,
  MoreIcon,
  ReplyIcon,
  RetweetIcon,
  ShareIcon,
} from "../../icons/styled-icons";
import { TweetInfo } from "../../interfaces/components/tweet-card";
import { getFormattedDate, hashTagHighlighter } from "../../utils/helper";
import UserAvatar from "../common/avatar";
import PopOver from "../common/pop-over";
import Title from "../common/title";
import UserName from "../common/user-name";
import {
  AvatarContainer,
  Card,
  CreatedAt,
  Feedback,
  FeedbackContainer,
  Followers,
  FollowersContainer,
  InfoConatiner,
  TextContainer,
  Tweet,
  TweetContainer,
  UserInfo,
} from "./style";

const TweetCard: React.FC<TweetInfo> = ({ tweet, user }) => {
  const clickHandler = (e: any) => {
    const el = e.target.closest("span");
    if (el && e.currentTarget.contains(el)) {
      console.log(el.textContent);
    }
  };

  return (
    <Card>
      <Tweet>
        <PopOver user={user}>
          <AvatarContainer>
            <UserAvatar url={user.profile_image_url} />
          </AvatarContainer>
        </PopOver>

        <TweetContainer>
          <InfoConatiner>
            <PopOver user={user}>
              <UserInfo>
                <Title title={user.name} isVerified={user.verified} />
                <UserName userName={user.username} />
                <CreatedAt>.{getFormattedDate(tweet.created_at)}</CreatedAt>
              </UserInfo>
            </PopOver>
            <FollowersContainer>
              <Followers>{user.public_metrics.followers_count}</Followers>
              ,Followers
            </FollowersContainer>
            <div className="more">
              <MoreIcon />
            </div>
          </InfoConatiner>
          <TextContainer>
            <div
              onClick={clickHandler}
              dangerouslySetInnerHTML={hashTagHighlighter(tweet.text)}
            />
          </TextContainer>
          <FeedbackContainer>
            <Feedback>
              <ReplyIcon />
              <span>{tweet.public_metrics.reply_count}</span>
            </Feedback>
            <Feedback>
              <RetweetIcon />
              <span>{tweet.public_metrics.retweet_count}</span>
            </Feedback>

            <Feedback>
              <HeartIcon />
              <span>{tweet.public_metrics.like_count}</span>
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
