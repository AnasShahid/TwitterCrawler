import React, { ReactNode } from "react";

export type ContainerProps = {
  content: ReactNode;
};
const RouteContent = ({ content }: ContainerProps) => {
  return <div>{content}</div>;
};
export default RouteContent;
