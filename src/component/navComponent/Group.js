import React from "react";
import SideBar from "../body/sideBar";
import InterestBar from "../body/interestBar";
import { Link } from "react-router-dom";
import Card1 from "../../images/java.png";
import Card2 from "../../images/C.png";
import Card3 from "../../images/C++.jfif";
import Card4 from "../../images/Html.png";
import Card5 from "../../images/Css.png";
import Card6 from "../../images/JS.png";
import Card7 from "../../images/Node.png";
import Card8 from "../../images/React.png";
import Card9 from "../../images/angular.jpg";
class Group extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className=" col-md-2">
              <SideBar />
            </div>
            <div
              className="col-xm-12 col-md-7 my-2 bg-light wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="row mt-4">
                <div className="col">
                  <Link to="/project/upload">
                    <button
                      className="btn btn-danger mb-3"
                      style={{ float: "right" }}
                    >
                      <i className="fas fa-plus"> </i> Create
                    </button>
                  </Link>
                  <h3 className="projectHead">Groups</h3>

                  <p>
                    Here you can find some Groups made by people that can share
                    the intreset in the same type of language and technology so
                    they togather share information to each other and make a
                    Happy community.
                  </p>
                  <p>
                    You can Make your own Group or Spaces and invite People to
                    join them
                  </p>
                  <div className="row">
                    <div
                      className="col-sm-12 col-md-4 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="card groupCard" style={{ width: 200 }}>
                        <img
                          className="card-img-top"
                          src={Card3}
                          alt="Card image"
                          style={{ width: "100%" }}
                        />
                        <div className="card-body">
                          <h4 className="card-title">C++ Coders</h4>
                          <p className="card-text">
                            <b>
                              Privacy: Public <br></br> Members: 2.7k
                            </b>
                          </p>

                          <Link to="" className="btn btn-danger ">
                            Visit Group
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-sm-12 col-md-4 wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <div className="card groupCard" style={{ width: 200 }}>
                        <img
                          className="card-img-top"
                          src={Card2}
                          alt="Card image"
                          style={{ width: "100%" }}
                        />
                        <div className="card-body">
                          <h4 className="card-title">Love to C</h4>
                          <p className="card-text">
                            <b>
                              Privacy: Public <br></br> Members: 1.3k
                            </b>
                          </p>

                          <Link to="" className="btn btn-danger ">
                            Visit Group
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-sm-12 col-md-4 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="card groupCard" style={{ width: 200 }}>
                        <img
                          className="card-img-top"
                          src={Card1}
                          alt="Card image"
                          style={{ width: "100%" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">Code in JAVA</h5>
                          <p className="card-text">
                            <b>
                              Privacy: Public <br></br> Members: 8.7k
                            </b>
                          </p>

                          <Link to="" className="btn btn-danger ">
                            Visit Group
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div
                      className="col-sm-12 col-md-4 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="card groupCard" style={{ width: 200 }}>
                        <img
                          className="card-img-top"
                          src={Card5}
                          alt="Card image"
                          style={{ width: "100%" }}
                        />
                        <div className="card-body">
                          <h4 className="card-title">Colorful Css</h4>
                          <p className="card-text">
                            <b>
                              Privacy: Public <br></br> Members: 2.3k
                            </b>
                          </p>

                          <Link to="" className="btn btn-danger ">
                            Visit Group
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-sm-12 col-md-4 wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <div className="card groupCard" style={{ width: 200 }}>
                        <img
                          className="card-img-top"
                          src={Card4}
                          alt="Card image"
                          style={{ width: "100%" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">Web Developer</h5>
                          <p className="card-text">
                            <b>
                              Privacy: Public <br></br> Members: 7.3k
                            </b>
                          </p>

                          <Link to="" className="btn btn-danger ">
                            Visit Group
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-sm-12 col-md-4 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="card groupCard" style={{ width: 200 }}>
                        <img
                          className="card-img-top"
                          src={Card6}
                          alt="Card image"
                          style={{ width: "100%" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">Responsive Web</h5>
                          <p className="card-text">
                            <b>
                              Privacy: Public <br></br> Members: 10.3k
                            </b>
                          </p>

                          <Link to="" className="btn btn-danger ">
                            Visit Group
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div
                      className="col-sm-12 col-md-4 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="card groupCard" style={{ width: 200 }}>
                        <img
                          className="card-img-top"
                          src={Card7}
                          alt="Card image"
                          style={{ width: "100%" }}
                        />
                        <div className="card-body">
                          <h4 className="card-title">Node Js</h4>
                          <p className="card-text">
                            <b>
                              Privacy: Public <br></br> Members: 5.7k
                            </b>
                          </p>

                          <Link to="" className="btn btn-danger ">
                            Visit Group
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-sm-12 col-md-4 wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <div className="card groupCard" style={{ width: 200 }}>
                        <img
                          className="card-img-top"
                          src={Card9}
                          alt="Card image"
                          style={{ width: "100%" }}
                        />
                        <div className="card-body">
                          <h4 className="card-title">Angular fun</h4>
                          <p className="card-text">
                            <b>
                              Privacy: Public <br></br> Members: 6.3k
                            </b>
                          </p>

                          <Link to="" className="btn btn-danger ">
                            Visit Group
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-sm-12 col-md-4 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <div className="card groupCard" style={{ width: 200 }}>
                        <img
                          className="card-img-top"
                          src={Card8}
                          alt="Card image"
                          style={{ width: "100%" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">Code in React</h5>
                          <p className="card-text">
                            <b>
                              Privacy: Public <br></br> Members: 8.7k
                            </b>
                          </p>

                          <Link to="" className="btn btn-danger ">
                            Visit Group
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <InterestBar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Group;
