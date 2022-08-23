import React from "react";
import { Avatar, ImgContainer } from "./style";

const UserAvatar: React.FC<{
  url: string;
  style: { width: string; height: string };
}> = ({ url, style }) => {
  return (
    <ImgContainer style={style}>
      <Avatar src={url} />
    </ImgContainer>
  );
};

export default UserAvatar;
