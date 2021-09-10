import React from "react";
import Left from "./Left";
import Right from "./Right";
import StyledMain from "../elements/StyledMain";

const Main = () => {
  return (
    <StyledMain>
      <Left />
      <Right right />
    </StyledMain>
  );
};
export default Main;
