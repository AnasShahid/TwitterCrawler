import React, { ReactNode } from "react";

interface ContainerProps {
  content: ReactNode;
}
const RouteContent = ({ content }: ContainerProps) => {
  return <div>{content}</div>;
};
export default RouteContent;
