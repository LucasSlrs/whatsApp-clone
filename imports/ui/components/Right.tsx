import React from "react";

import StyledRight from "../elements/StyledRight";
import RightImg from "./RightImg";

const messageText: string =
  "This is a WhatsApp Clone made by Lucas Souleyrasse using Meteor js. Click on a conversation tot start chatting";
const Right = (props): JSX.Element => {
  return (
    <StyledRight>
      <RightImg right={props.right} messageText={messageText} />
    </StyledRight>
  );
};
export default Right;
