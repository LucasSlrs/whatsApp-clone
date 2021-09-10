import React from "react";
import FormLogin from "./FormLogin";
import RightImg from "./RightImg";
import { Meteor } from "meteor/meteor";

const messageText: string = "Login to start chatting";

const Login = (props) => {
  const handleLogin = (state) => {
    const { password, username } = state;
    Meteor.call("user.login", state, (err, res) => {
      if (err) {
        console.log("error login", err);
      } else {
        console.log("response", res);
        Meteor.loginWithPassword(username, password, (err) => {
          if (err) {
            console.log("error", err);
          } else {
            console.log("responnse", res);
            props.history.push("/chats");
          }
        });
      }
    });
  };
  return (
    <RightImg messageText={messageText}>
      <FormLogin onLogin={handleLogin} />
    </RightImg>
  );
};
export default Login;
