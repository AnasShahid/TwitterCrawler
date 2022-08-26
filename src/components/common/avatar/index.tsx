import React from "react";
import { AvatarInfo } from "../../../interfaces";
import { Avatar, ImgContainer } from "./style";

const UserAvatar: React.FC<AvatarInfo> = ({ url, style }) => {
  return (
    <ImgContainer style={style}>
      <Avatar src={url} />
    </ImgContainer>
  );
};

export default UserAvatar;
