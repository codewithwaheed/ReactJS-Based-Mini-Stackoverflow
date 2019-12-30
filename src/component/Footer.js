import React from "react";
import logo from "../images/logo.jpg";
class Footer extends React.Component {
  render() {
    return (
      <div>
        <div class="container-fluid bg-light wow fadeInUp footer ">
          <div class="row text-center">
            <div class="col-12">
              <h2 className="footerHead">Connect</h2>
            </div>
            <div class="col-12 social">
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="container-fluid my-2 wow fadeInUp bg-light  footer2">
          <div className="row text-center">
            <div className="col-md-4">
              <img className="logo" src={logo}></img>
              <h5>Learning Desk</h5>

              <div className="footerText">
                <p>042-555-5432</p>
                <p>learningDeskPK@gmail.com</p>
                <p>Office no 34,Floor no 3 ,Hafeez center</p>
                <p>Lahore, Punjab, 54000</p>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Our hours</h5>

              <div className="footerText">
                <p>Monday: 9am to 5pm</p>
                <p>Saturday: 10am to 4pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Services</h5>

              <div className="footerText">
                <p>A learning platform for student</p>
                <p>we provide open Source Code</p>
                <p>You can intrect people of your profession</p>
                <p>Free Projects </p>
              </div>
            </div>
            <div className="col-12">
              <h5>© Learningdesk.com</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
