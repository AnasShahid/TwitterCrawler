import React from "react";
import { Username } from "./style";
import { UserName as Name } from "../../../interfaces";

const UserName: React.FC<Name> = ({ userName }) => {
  return <Username>@{userName}</Username>;
};

export default UserName;
