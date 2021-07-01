import React from "react";
import ReactDOM from "react-dom";
import { Route, Router } from "react-router-dom";
import { history } from "./routing/history";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import App from "./components/App";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <Route component={App} />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
