import React from "react";
import { StyleAvatar } from "../../../interfaces";
import { Avatar, ImgContainer } from "./style";

const UserAvatar: React.FC<{
  url: string;
  style: StyleAvatar;
}> = ({ url, style }) => {
  return (
    <ImgContainer style={style}>
      <Avatar src={url} />
    </ImgContainer>
  );
};

export default UserAvatar;
