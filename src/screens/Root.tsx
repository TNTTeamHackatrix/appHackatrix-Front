import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./Home/Home";

export const ScreensRoot = () => (
  <Switch>
    <Route exact path="/home" component={Home}/>
  </Switch>
);
