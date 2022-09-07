import React, { ReactNode } from "react";

interface ContainerProps {
  content: ReactNode;
}
const Container = ({ content }: ContainerProps) => {
  return <div>{content}</div>;
};
export default Container;
