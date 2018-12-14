import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./app";
import Home from "./pages/home";

const routes = (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </App>
  </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById("root"));
