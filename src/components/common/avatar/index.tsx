import React from "react";
import { AvatarInfo } from "../../../interfaces";
import { DEFAULT_AVATAR_STYLE } from "../../../utils/constans";
import { Avatar, ImgContainer } from "./style";

const UserAvatar: React.FC<AvatarInfo> = ({ url, style }) => {
  return (
    <ImgContainer>
      <Avatar src={url} style={style ? style : DEFAULT_AVATAR_STYLE} />
    </ImgContainer>
  );
};

export default UserAvatar;
