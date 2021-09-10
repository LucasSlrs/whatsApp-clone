import React from "react";
import StyledFormLogin from "../elements/StyledFormLogin";
import { UserCredential } from "../interface";

const FormLogin = (props): JSX.Element => {
  const [state, setState] = React.useState<UserCredential>({
    username: "",
    phoneNumber: "",
    password: "",
  });

  const { username, phoneNumber, password } = state;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue: string = e.target.value;
    const inputName: string = e.target.name;

    setState((prevState) => ({
      ...prevState,
      [inputName]: inputValue,
    }));
  };
  return (
    <StyledFormLogin>
      <label className="label">
        <input
          type="text"
          className="input"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleChange}
        />
      </label>
      <label className="label">
        <input
          type="text"
          className="input"
          name="phoneNumber"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={handleChange}
        />
      </label>
      <label className="label">
        <input
          type="password"
          className="input"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button onClick={() => props.onLogin(state)} className="loginBtn">
        Login
      </button>
    </StyledFormLogin>
  );
};
export default FormLogin;
