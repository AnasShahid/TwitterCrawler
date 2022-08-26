import React from "react";
import { Button, Whisper } from "rsuite";
import UserAvatar from "../avatar";
import "rsuite/dist/rsuite.css";
import {
  AddToAnalysisButton,
  AvatarContainer,
  Connections,
  PopOverBody,
  PopOverHeader,
  UserDetails,
  UserDiscription,
} from "./style";
import Title from "../title";

const UserPopOver: React.FC = () => {
  const avatarStyle = { height: "70px", width: "70px" };
  const profile_image_url =
    "https://pbs.twimg.com/profile_images/1387160070643875840/AdMdZpk9_normal.jpg";
  const speaker = (
    <UserDetails>
      <PopOverHeader>
        <AvatarContainer>
          <UserAvatar url={profile_image_url} style={avatarStyle} />
        </AvatarContainer>
        <AddToAnalysisButton>Add to Analysis</AddToAnalysisButton>
      </PopOverHeader>
      <PopOverBody>
        <Title title="Muhammad Haris moin" isVerified={true} />
        <h4>@hmoin1122</h4>
        <UserDiscription>
          What a beautiful place. Hopefully there will be a lot of marked spots
          for trekking. Can’t believe such a sprawling urban oasis is in
          #Karachi
        </UserDiscription>
        <Connections>
          <div>
            100 <span>Followers</span>
          </div>
          <div>
            100 <span>Following</span>
          </div>
        </Connections>
      </PopOverBody>
    </UserDetails>
  );

  return (
    <div>
      <Whisper
        placement="bottom"
        trigger="hover"
        controlId="control-id-hover-enterable"
        speaker={speaker}
        enterable
      >
        <Button>Hover + Enterable</Button>
      </Whisper>
    </div>
  );
};

export default UserPopOver;
