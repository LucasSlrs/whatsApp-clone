import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Main from "./Main";
import { ThemeProvider } from "styled-components";
import theme from "../theme/index";

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" Component={Login} />
          <Route path="/chats" Component={Main} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
