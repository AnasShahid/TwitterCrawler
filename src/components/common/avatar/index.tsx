import React from "react";
import { AvatarInfo } from "../../../interfaces";
import { Avatar, ImgContainer } from "./style";

const UserAvatar: React.FC<AvatarInfo> = ({ url }) => {
  return (
    <ImgContainer>
      <Avatar src={url} />
    </ImgContainer>
  );
};

export default UserAvatar;
