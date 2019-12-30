import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../body/sideBar";
import InterestBar from "../body/interestBar";
import AddQuestion from "../body/feedComponents/addQuestion";
class favourite extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className=" col-md-2">
            <SideBar />
          </div>
          <div className="col-xm-12 col-md-7 bg-light my-2">
            <div className=" wow fadeInUp" data-wow-delay="0.3s">
              favourite
            </div>
          </div>
          <div className="col-sm-12 col-md-3">
            <InterestBar />
          </div>
        </div>
      </div>
    );
  }
}
export default favourite;
