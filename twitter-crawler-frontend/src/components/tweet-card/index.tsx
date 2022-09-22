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
import Title from "../common/Title";
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

const TweetCard: React.FC<{ tweetDetails: TweetInfo }> = ({ tweetDetails }) => {
  const clickHandler = (e: any) => {
    const el = e.target.closest("span");
    if (el && e.currentTarget.contains(el)) {
      console.log(el.textContent);
    }
  };

  return (
    <Card>
      <Tweet>
        <AvatarContainer>
          <UserAvatar url={tweetDetails.author.profile_image_url} />
        </AvatarContainer>

        <TweetContainer>
          <InfoConatiner>
            <UserInfo>
              <Title
                title={tweetDetails.author.name}
                isVerified={tweetDetails.author.verified}
              />
              <UserName userName={tweetDetails.author.username} />
              <CreatedAt>
                .{getFormattedDate(tweetDetails.created_at)}
              </CreatedAt>
            </UserInfo>
            <FollowersContainer>
              <Followers>
                {tweetDetails.author.public_metrics.followers_count}
              </Followers>
              ,Followers
            </FollowersContainer>
            <div className="more">
              <MoreIcon />
            </div>
          </InfoConatiner>
          <TextContainer>
            <div
              onClick={clickHandler}
              dangerouslySetInnerHTML={hashTagHighlighter(tweetDetails.text)}
            />
          </TextContainer>
          <FeedbackContainer>
            <Feedback>
              <ReplyIcon />
              <span>{tweetDetails.public_metrics.reply_count}</span>
            </Feedback>
            <Feedback>
              <RetweetIcon />
              <span>{tweetDetails.public_metrics.retweet_count}</span>
            </Feedback>

            <Feedback>
              <HeartIcon />
              <span>{tweetDetails.public_metrics.like_count}</span>
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
