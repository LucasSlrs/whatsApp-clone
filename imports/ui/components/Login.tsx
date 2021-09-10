import React from "react";
import FormLogin from "./FormLogin";
import RightImg from "./RightImg";

const messageText: string = "Login to start chatting";

const Login = () => {
  const handleLogin = (state) => {};
  return (
    <RightImg messageText={messageText}>
      <FormLogin onLogin={handleLogin} />
    </RightImg>
  );
};
export default Login;
