import React from "react";
import "./style.css";
import { VerifiedIcon } from "../../../icons/styled-icons";

const Title: React.FC<{ title: string; isVerified: boolean }> = ({
  title,
  isVerified,
}) => {
  return (
    <div className="user-title-container">
      <h2>{title}</h2>
      {isVerified && <VerifiedIcon />}
    </div>
  );
};

export default Title;
