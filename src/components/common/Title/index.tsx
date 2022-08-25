import React from "react";
import { TitleContainer } from "./style";
import { VerifiedIcon } from "../../../icons/styled-icons";
import { UserTitle } from "../../../interfaces";

const Title: React.FC<UserTitle> = ({ title, isVerified }) => {
  return (
    <TitleContainer>
      <h2>{title}</h2>
      {isVerified && <VerifiedIcon />}
    </TitleContainer>
  );
};

export default Title;
