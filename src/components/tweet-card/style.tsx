import styled from "styled-components";

export const Card = styled.div`
  width: 50%;
  margin: 10px auto;
  border: 1px solid #ebebeb;
`;
export const Tweet = styled.div`
  padding: 5px;
  display: flex;
`;
export const AvatarContainer = styled.div`
  width: 15%;
`;
export const TweetContainer = styled.div`
text-align : left:
margin-left:10px;
  width: 85%;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  h2 {
    font-size: 20px;
    margin: 0;
    &:hover {
      cursor: pointer;
      border-bottom: 2px solid;
    }
  }
`;
export const InfoConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  .more {
    margin-right: 16px;

    width: 25px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const CreatedAt = styled.div`
  margin-left: 10px;
  color: grey;
  font-weight: 700;
  &:hover {
    border-bottom: 1px solid;
    cursor: pointer;
  }
`;

export const TextContainer = styled.div`
  font-weight: 500;
  text-align: left;
  .hash-mention {
    color: ${({ theme }) => theme.colors.lightBlue};
    font-weight: 600;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
export const FeedbackContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 86%;
  text-align: left;
  margin: 10px 0;
`;
export const Feedback = styled.div`
  align-items: center;
  display: flex;
`;
export const FollowersContainer = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.grey};
`;
export const Followers = styled.span`
  color: ${({ theme }) => theme.colors.black}; ;
`;
