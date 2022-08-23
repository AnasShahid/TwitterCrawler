import React from "react";
import "./style.css";

const UserName: React.FC<{ userName: string }> = ({ userName }) => {
  return <div className="user-name">@{userName}</div>;
};

export default UserName;
