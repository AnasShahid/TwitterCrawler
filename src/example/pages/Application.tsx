import React from "react";
import AboutPage from "./About";
import HomePage from "./Home";

export interface IApplicationPageProps {}

const Application: React.FunctionComponent<IApplicationPageProps> = () => {
  return (
    <div>
      <HomePage />
      <AboutPage />
    </div>
  );
};

export default Application;
