import React from "react";
import { Username } from "./style";

const UserName: React.FC<{ userName: string }> = ({ userName }) => {
  return <Username>@{userName}</Username>;
};

export default UserName;
