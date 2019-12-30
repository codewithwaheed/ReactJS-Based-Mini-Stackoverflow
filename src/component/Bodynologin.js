import React from "react";
import "../css/bodynologin.css";
import fire from "../Fire"
import { Link } from "react-router-dom";
import slide1 from "./../images/slide1.jpg";
import slide2 from "./../images/slide2.jfif";
import slide3 from "./../images/slide3.jpg";
import Card1 from "./../images/project.png";
import Card2 from "../images/user.png";
import Card3 from "../images/about.png";
class BodynoLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);}
    componentDidMount() {
      this.authListener();
    }
    
    authListener() {
      fire.auth().onAuthStateChanged((user) => {
        
        if (user) {
          this.setState({ user });
          
        } else {
          this.setState({ user: null });
         
        }
      });
    }
    
  render() {
    return (
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100 slideImg"
                src={slide1}
                alt="First slide"
              />
              <div class="carousel-caption">
                <h1 className="HeadSlide1">Learning Desk</h1>
                <h3 className="display-5">Learn with Ease</h3>
                <Link to={this.state.user===null?"/login":'/home'}>
                  <button
                    className="wow fadeInLeft btn btn-danger btn-lg slideBtn mt-3"
                    data-wow-delay="1s"
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 slideImg"
                src={slide2}
                alt="Second slide"
              />
              <div class="carousel-caption">
                <h1 className="HeadSlide1">Ask Your Question</h1>
                <h3 className="display-5">
                  Here you can get answers from some Professionals
                </h3>
                <Link to="add-question">
                  <button className="btn btn-outline-danger btn-lg slideBtn mt-2">
                    Ask Question
                  </button>
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 slideImg"
                src={slide3}
                alt="Third slide"
              />
              <div class="carousel-caption">
                <h1 className="HeadSlide1">Share Your Knowledge</h1>
                <h3 className="display-5">
                  A place where you can make the world better by giving your
                  Share of Knowledge
                </h3>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleFade"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleFade"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div class="container-fluid">
          <div class="row jumbotron wow slideInLeft" data-wow-delay="0.2s">
            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
              <p class="lead">
                If you are a student , a developer or a person in who have some
                questions and want to learn , then you are in right place
              </p>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
              <Link to="/info">
                <button type="button" class="btn btn-outline-danger btn-lg">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div class="container-fluid">
          <div class="row  ">
            <div
              class="bg-light col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center wow slideInLeft"
              data-wow-delay="0.3s"
            >
              <h1 className="infoHead ">Get Started</h1>
              <p class=" text-left  lead">
                You wanted to do some self study and improve your skills but
                having problems while you creating some projects, thats becuase
                you need some help of experts to polish your skills and get more
                knowlage about the things how they work.<br></br>
                <br></br>
                So just get ready for the ease of learning and connect with the
                community. create your account on Learning desk now.
              </p>
              <Link to="/login">
                <button type="button" class="btn btn-outline-danger  btn-lg">
                  Sign up
                </button>
              </Link>
            </div>
            <div
              class=" bg-light col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center wow slideInRight "
              data-wow-delay="0.3s"
            >
              <h1 className="pt-2 infoHead ">How it Works?</h1>
              <p class=" text-left lead">
                You have to Creat account thats your First step , in which you
                add your intrest course , subjects , programming language ,
                problem solving techniques than you join some group spaces in
                which you are interested and find the other people with the same
                interest and interect with them
              </p>
              <Link to="/info">
                <button type="button" class="btn btn-outline-danger  btn-lg">
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="container-fluid padding">
          <div className="row row-centered mt-3">
            <div className="col-md-4">
              <div class="flip-card wow fadeInUp ">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={Card1}
                      alt="Avatar"
                      style={{ width: 300, height: 300 }}
                    />
                  </div>
                  <div className="flip-card-back bg-light">
                    <br></br>
                    <h1>Project</h1>
                    <br></br>
                    <p>
                      You can upload your own work and share with people and you
                      can also dowload and learn from other experts projects ,
                      and ask them quries about that
                    </p>
                    <Link to="/project" className="btn btn-danger">
                      See More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div class="flip-card wow fadeInUp" data-wow-delay="0.2s">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={Card2}
                      alt="Avatar"
                      style={{ width: 300, height: 300 }}
                    />
                  </div>
                  <div className="flip-card-back bg-light">
                    <br></br>
                    <h1>Groups</h1>
                    <br></br>
                    <p>
                      You can join different spaces according to your interest
                      where you can ask quries and get help from the people of
                      your same interest
                    </p>
                    <Link to="/group" className="btn btn-danger">
                      See More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div class="flip-card wow fadeInUp" data-wow-delay="0.5s">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={Card3}
                      alt="Avatar"
                      style={{ width: 300, height: 300 }}
                    />
                  </div>
                  <div className="flip-card-back bg-light">
                    <br></br>
                    <h1>Information</h1>
                    <br></br>
                    <p>
                      Here you can Find out how to join , how this platform work
                      and what benifits you can get from here.
                    </p>
                    <Link to="/info" className="btn btn-danger">
                      See More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BodynoLogin;
