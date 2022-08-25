import React from "react";
import { TitleContainer } from "./style";
import { VerifiedIcon } from "../../../icons/styled-icons";

const Title: React.FC<{ title: string; isVerified: boolean }> = ({
  title,
  isVerified,
}) => {
  return (
    <TitleContainer>
      <h2>{title}</h2>
      {isVerified && <VerifiedIcon />}
    </TitleContainer>
  );
};

export default Title;
