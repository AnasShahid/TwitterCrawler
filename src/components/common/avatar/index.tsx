import React from "react";
import { AvatarInfo } from "../../../interfaces";
import { avatarStyle } from "../../../utils/constans";
import { Avatar, ImgContainer } from "./style";

const UserAvatar: React.FC<AvatarInfo> = ({ url, style }) => {
  return (
    <ImgContainer>
      <Avatar src={url} style={style ? style : avatarStyle} />
    </ImgContainer>
  );
};

export default UserAvatar;
