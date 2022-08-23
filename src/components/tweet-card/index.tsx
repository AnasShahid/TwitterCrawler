import React from "react";
import tweets from "../../tweets.json";
import {
  Card,
  AvatarContainer,
  Tweet,
  TweetContainer,
  Avatar,
  ImgContainer,
  UserInfo,
  InfoConatiner,
  CreatedAt,
  TextContainer,
  FeedbackContainer,
} from "./style";

const TweetCard = () => {
  return (
    <div>
      <Card>
        <Tweet>
          <AvatarContainer>
            <ImgContainer>
              <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/682px-Pierre-Person.jpg" />
            </ImgContainer>
          </AvatarContainer>
          <TweetContainer>
            <InfoConatiner>
              <UserInfo>
                <h3 className="title">{tweets.user.name}</h3>
                <div className="user-name">@{tweets.user.username}</div>
                <CreatedAt>. Aug 14</CreatedAt>
              </UserInfo>
              <InfoConatiner>more</InfoConatiner>
            </InfoConatiner>
            <TextContainer>{tweets.data.text}</TextContainer>
            <FeedbackContainer>
              <div>reply 10</div>
              <div>Like 200</div>
              <div>retweet 400</div>
              <div>share 10</div>
            </FeedbackContainer>
          </TweetContainer>
        </Tweet>
      </Card>
    </div>
  );
};

export default TweetCard;
