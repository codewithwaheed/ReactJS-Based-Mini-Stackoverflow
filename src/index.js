import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./css/animate.css";
import "./css/index.css";
import "./css/addQuestion.css";
import "./css/sideBarComponent.css"

import json from "./component/Data/interestBar.json";


ReactDOM.render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>,
  document.getElementById("root")
);
