import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";
import { ThemeProvider } from "styled-components";
import theme from "./theme/index";

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/chats" component={Main} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
