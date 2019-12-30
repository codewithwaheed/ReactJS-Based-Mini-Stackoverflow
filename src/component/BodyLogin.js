import React from "react";
import SideBar from "./body/sideBar";
import HomeFeed from "./sideBarComponent/HomeFeed";
import { Route, Link } from "react-router-dom";
import InterestBar from "./body/interestBar";
class BodyLogin extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className=" col-md-2">
            <SideBar />
          </div>
          <div className="col-xm-12 col-md-7 bg-light my-2">
            <Route path="/" exact component={HomeFeed}></Route>
            <Route path="/home" exact component={HomeFeed}></Route>
          </div>
          <div className="col-sm-12 col-md-3">
            <InterestBar />
          </div>
        </div>
      </div>
    );
  }
}
export default BodyLogin;
