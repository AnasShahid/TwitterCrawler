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
export const ImgContainer = styled.div`
  width: 65px;
  height: 65px;
  margin: 5px auto;
`;
export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  .title {
    margin: 0;
    &:hover {
      cursor: pointer;
      border-bottom: 2px solid;
    }
  }
  .user-name {
    margin-left: 10px;
    color: grey;
    font-weight: 700;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const InfoConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
`;
// export const UserName = styled.div`
//   margin-left: 5px;
// `;
export const CreatedAt = styled.div`
  margin-left: 10px;
  color: grey;
  font-weight: 700;
  &:hover {
    border-bottom: 1px solid;
    cursor: pointer;
  }
`;
// export const Title = styled.h3`
// `;
export const TextContainer = styled.div`
  font-weight: 500;
  text-align: left;
`;
export const FeedbackContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  text-align: left;
  margin: 10px 0;
`;
