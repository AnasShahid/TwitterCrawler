import React from "react";
import { Button } from "../styled-component/Style";

export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  return (
    <div>
      <p>about page</p>
      <div>
        <div>
          <Button>Back To Home</Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
