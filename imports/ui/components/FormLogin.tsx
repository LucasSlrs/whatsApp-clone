import React from "react";
import StyledFormLogin from "../elements/StyledFormLogin";

interface UserCredential {
  username: string;
  phoneNumber: string;
  password: string;
}
const FormLogin = (props: any): JSX.Element => {
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
          name="phone"
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
      <button className="loginBtn">Login</button>
    </StyledFormLogin>
  );
};
export default FormLogin;
