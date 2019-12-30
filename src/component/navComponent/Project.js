import React from "react";
import ReactDOM from "react-dom"
import "../../css/project.css";
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
import UploadProject from "../Project/UploadProject";
class Project extends React.Component {
  componentDidUpdate() {
    ReactDOM.findDOMNode(this).scrollLeft = 0;
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className=" col-md-2">
              <SideBar />
            </div>
            <div
              className="col-xm-12 col-md-7 my-2 bg-light wow fadeInDown"
              data-wow-delay="0.3s"
            >
              <div className="row mt-4">
                <div className="col">
                  <Link to="/project/upload">
                    <button
                      className="btn btn-danger mb-3"
                      style={{ float: "right" }}
                    >
                      <i className="fas fa-upload"> </i> Upolad
                    </button>
                  </Link>
                  <h3 className="projectHead">Projects</h3>

                  <p style={{ float: "left" }}>
                    Find some of the best project in different Programming
                    langauages Like JAVA , C++ , C , Python , WebApplication ,
                    React , Angular and many more
                  </p>
                  <p>
                    You can Add your Work As Well you just have to click on
                    upload button and select your project and Upolad it Now !
                  </p>
                  <p>
                    we believe in Creating a society where every one can learn
                    from each other and Share information, and providing some
                    projects so no Body have to create the wheel again and
                    provide some extra Knowlage in Society from which people are
                    not Aware . So just join the DESK and START learning{" "}
                  </p>
                  <p>Select Your langauage in which you want a Project.</p>
                </div>
              </div>

              <div className="row  mt-3">
                <div className="col-md-4">
                  <div
                    class="pro-flip-card wow fadeInUp "
                    data-wow-delay="0.4s"
                  >
                    <div className="pro-flip-card-inner">
                      <div className="pro-flip-card-front">
                        <img
                          src={Card1}
                          alt="Avatar"
                          style={{ width: 200, height: 200 }}
                        />
                      </div>
                      <div className="pro-flip-card-back bg-light">
                        <h3>JAVA</h3>

                        <p>
                          You can upload your own project and See other peopel
                          work
                        </p>
                        <Link
                          to="/project/java"
                          className="btn btn-danger"
                        >
                          JAVA projects
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div class="pro-flip-card wow fadeInUp" data-wow-delay="0.4s">
                    <div className="pro-flip-card-inner">
                      <div className="pro-flip-card-front">
                        <img
                          src={Card2}
                          alt="Avatar"
                          style={{ width: 200, height: 200 }}
                        />
                      </div>
                      <div className="pro-flip-card-back bg-light">
                        <h3>C</h3>
                        <p>
                          You can upload your own project and See other peopel
                          work
                        </p>
                        <Link to="/group" className="btn btn-danger">
                          C Projects
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div class="pro-flip-card wow fadeInUp" data-wow-delay="0.6s">
                    <div className="pro-flip-card-inner">
                      <div className="pro-flip-card-front">
                        <img
                          src={Card3}
                          alt="Avatar"
                          style={{ width: 200, height: 200 }}
                        />
                      </div>
                      <div className="pro-flip-card-back bg-light">
                        <h3>C++</h3>

                        <p>
                          You can upload your own project and See other peopel
                          work
                        </p>
                        <Link to="/about" className="btn btn-danger">
                          C++ Projects
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row  mt-3">
                <div className="col-md-4">
                  <div class="pro-flip-card wow fadeInUp " data-wow-delay="0.3s">
                    <div className="pro-flip-card-inner">
                      <div className="pro-flip-card-front">
                        <img
                          src={Card4}
                          alt="Avatar"
                          style={{ width: 200, height: 200 }}
                        />
                      </div>
                      <div className="pro-flip-card-back bg-light">
                        <h3>Html</h3>

                        <p>
                          You can upload your own project and See other peopel
                          work
                        </p>
                        <Link to="/project" className="btn btn-danger">
                          Html projects
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div class="pro-flip-card wow fadeInUp" data-wow-delay="0.4s">
                    <div className="pro-flip-card-inner">
                      <div className="pro-flip-card-front">
                        <img
                          src={Card5}
                          alt="Avatar"
                          style={{ width: 200, height: 200 }}
                        />
                      </div>
                      <div className="pro-flip-card-back bg-light">
                        <h3>Css</h3>
                        <p>
                          You can upload your own project and See other peopel
                          work
                        </p>
                        <Link to="/group" className="btn btn-danger">
                          Css Projects
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div class="pro-flip-card wow fadeInUp" data-wow-delay="0.6s">
                    <div className="pro-flip-card-inner">
                      <div className="pro-flip-card-front">
                        <img
                          src={Card6}
                          alt="Avatar"
                          style={{ width: 200, height: 200 }}
                        />
                      </div>
                      <div className="pro-flip-card-back bg-light">
                        <h3>JS</h3>

                        <p>
                          You can upload your own project and See other peopel
                          work
                        </p>
                        <Link to="/about" className="btn btn-danger">
                          JS Projects
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row  mt-3">
                <div className="col-md-4">
                  <div class="pro-flip-card wow fadeInUp " data-wow-delay="0.3s">
                    <div className="pro-flip-card-inner">
                      <div className="pro-flip-card-front">
                        <img
                          src={Card7}
                          alt="Avatar"
                          style={{ width: 200, height: 200 }}
                        />
                      </div>
                      <div className="pro-flip-card-back bg-light">
                        <h3>Node</h3>

                        <p>
                          You can upload your own project and See other peopel
                          work
                        </p>
                        <Link to="/project" className="btn btn-danger">
                          Node projects
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div class="pro-flip-card wow fadeInUp" data-wow-delay="0.4s">
                    <div className="pro-flip-card-inner">
                      <div className="pro-flip-card-front">
                        <img
                          src={Card8}
                          alt="Avatar"
                          style={{ width: 200, height: 200 }}
                        />
                      </div>
                      <div className="pro-flip-card-back bg-light">
                        <h3>React</h3>
                        <p>
                          You can upload your own project and See other peopel
                          work
                        </p>
                        <Link to="/group" className="btn btn-danger">
                          React Projects
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div class="pro-flip-card wow fadeInUp" data-wow-delay="0.6s">
                    <div className="pro-flip-card-inner">
                      <div className="pro-flip-card-front">
                        <img
                          src={Card9}
                          alt="Avatar"
                          style={{ width: 200, height: 200 }}
                        />
                      </div>
                      <div className="pro-flip-card-back bg-light">
                        <h3>Angular</h3>

                        <p>
                          You can upload your own project and See other peopel
                          work
                        </p>
                        <Link to="/about" className="btn btn-danger">
                          Angular Projects
                        </Link>
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
export default Project;
