import React from "react";
import { Link } from "react-router-dom";
class sideBar extends React.Component {
  render() {
    return (
      <div className="  bg-light wow fadeInUp" id="sideBarBox">
        <div className=" navbar-expand-md">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#sidebarResponsive"
            style={{ marginLeft: "45%" }}
          >
            <i
              className=" fas fa-angle-double-down wow heartBeat "
              daat-wow-delay="0.1s"
              data-wow-iteration="infinite"
              style={{ color: "#d35400" }}
            ></i>
          </button>
          <div className="collapse navbar-collapse" id="sidebarResponsive">
            <ul className=" sideBarList2">
              <li>
                <Link class="bg-light" to="/feed">
                  <p className="sideitem sideitem2">
                    <i className="fas fa-book"></i> Feed
                  </p>
                </Link>
              </li>
              <hr></hr>
              <li>
                <Link class="  bg-light" to="/answer">
                  <p className="sideitem sideitem2">
                    <i className="fas fa-question"></i> Answer
                  </p>
                </Link>
              </li>
              <hr></hr>
              <li>
                <Link class="  bg-light" to="/favourite">
                  <p className="sideitem sideitem2">
                    <i className="fas fa-star"></i>
                    Favourite
                  </p>
                </Link>
              </li>
              <hr></hr>
              <li>
                <Link class="  bg-light" to="/tag">
                  <p className="sideitem sideitem2">
                    {" "}
                    <i className="fas fa-tag"></i> Tags
                  </p>
                </Link>
              </li>
              <hr></hr>
              <li>
                <Link class=" bg-light" to="yourGroup">
                  <p className="sideitem sideitem2">
                    <i className="fas fa-users "></i>
                    Your Groups
                  </p>
                </Link>
              </li>
              <hr></hr>
              <li>
                <Link class="  bg-light" to="/profile">
                  <p className="sideitem sideitem2">
                    {" "}
                    <i className="fas fa-user "></i> Profile
                  </p>
                </Link>
              </li>
              <hr></hr>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default sideBar;
