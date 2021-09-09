import React from "react";
import StyledFormLogin from "../elements/StyledFormLogin";

interface UserCredential {
  username: string;
  phoneNumber: string;
  password: string;
}
const FormLogin = (props: UserCredential): JSX.Element => {
  return (
    <StyledFormLogin>
      <label className="label">
        <input
          type="text"
          className="input"
          name="username"
          placeholder="Username"
        />
        <input
          type="number"
          className="input"
          name="phone"
          placeholder="Phone Number"
        />
        <input
          type="password"
          className="input"
          name="password"
          placeholder="Password"
        />
      </label>
      <button className="loginBtn">Login</button>
    </StyledFormLogin>
  );
};
export default FormLogin;
