import React from "react";
import { Route } from "react-router-dom";
import BodynoLogin from "../Bodynologin";
import BodyLogin from "../BodyLogin";

class Home extends React.Component {
  
  render() {
    return (
      <div>
        <BodyLogin></BodyLogin>
      </div>
    );
  }
}
export default Home;
