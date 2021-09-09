import React from "react";
import FormLogin from "./FormLogin";
import RightImg from "./RightImg";

const messageText: string = "Login to start chatting";

const Login = () => {
  return (
    <RightImg messageText={messageText}>
      <FormLogin />
    </RightImg>
  );
};
export default Login;
