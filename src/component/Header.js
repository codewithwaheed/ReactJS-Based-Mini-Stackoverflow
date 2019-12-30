import React from "react";
import logo from "../images/logo.jpg";
import { Link, BrowserRouter } from "react-router-dom";
import fire from "../Fire"

class Header extends React.Component {
  state = {
    
    currentState1: true,
    currentState2: true,
    currentState3: true,
    stateHome: true,
    stateProject: true,
    stateNotification: true,
    stateGroup: true,
    stateAbout: true
  };
  constructor(props) {
    super(props);
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
    this.logout = this.logout.bind(this);
}
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

logout() {
  fire.auth().signOut();
}

  changeHome = () => {
    this.setState({
      stateHome: false,
      stateProject: true,
      stateNotification: true,
      stateGroup: true,
      stateAbout: true
    });
  };
  changeProject = () => {
    this.setState({
      stateProject: false,
      stateHome: true,
      stateNotification: true,
      stateGroup: true,
      stateAbout: true
    });
  };
  changeGroup = () => {
    this.setState({
      stateGroup: false,
      stateHome: true,
      stateProject: true,
      stateNotification: true,
      stateAbout: true
    });
  };
  changeNotification = () => {
    this.setState({
      stateNotification: false,
      stateHome: true,
      stateProject: true,
      stateGroup: true,
      stateAbout: true
    });
  };
  changeAbout = () => {
    this.setState({
      stateAbout: false,
      stateHome: true,
      stateProject: true,
      stateNotification: true,
      stateGroup: true
    });
  };
  changeSearchColor = () => {
    this.setState({
      currentState1: false
    });
  };
  changeLoginBtn = () => {
    this.setState({
      currentState2: false
    });
  };
  changeInputSearch = () => {
    this.setState({
      currentState3: false
    });
  };
  render() {
    return (
      <nav className="navbar  navbar-expand-lg bg-light sticky-top ">
        <div className="container-fluid">
          <Link to="/">
            <a className="navbar-brand" href="#">
              <img className="logo" src={logo}></img>
              <span className="brandhead"> Learning Desk</span>
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
          >
            <i className="fas fa-bars " style={{ color: "#d35400" }}></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav mr-auto">
              <Link to="/home">
                <li
                  className="nav-item  headitem"
                  onClick={this.changeHome}
                  style={{
                    color: this.state.stateHome ? "#edbb99" : "#d35400"
                  }}
                >
                  <a className="nav-link ">
                    <p>
                      <i className="fas fa-home"></i>Home
                    </p>
                  </a>
                </li>
              </Link>
              <Link to="/project">
                <li
                  className="nav-item headitem"
                  onClick={this.changeProject}
                  style={{
                    color: this.state.stateProject ? "#edbb99" : "#d35400"
                  }}
                >
                  {" "}
                  <a className="nav-link">
                    <p>
                      <i className="fas fa-book"></i>Project
                    </p>
                  </a>
                </li>
              </Link>
              <Link to="/group">
                <li
                  className="nav-item headitem"
                  onClick={this.changeGroup}
                  style={{
                    color: this.state.stateGroup ? "#edbb99" : "#d35400"
                  }}
                >
                  <a className="nav-link">
                    <p>
                      <i className="fas fa-users"></i>Groups
                    </p>
                  </a>
                </li>
              </Link>
              <Link to="/notification">
                <li
                  className="nav-item headitem"
                  onClick={this.changeNotification}
                  style={{
                    color: this.state.stateNotification ? "#edbb99" : "#d35400"
                  }}
                >
                  <a className="nav-link">
                    <p>
                      <i className="fas fa-comment"></i>Notifications
                    </p>
                  </a>
                </li>
              </Link>
              <Link to="/about">
                <li
                  className="nav-item headitem"
                  onClick={this.changeAbout}
                  style={{
                    color: this.state.stateAbout ? "#edbb99" : "#d35400"
                  }}
                >
                  <a className="nav-link">
                    <p>
                      <i className="fas fa-book"></i>About
                    </p>
                  </a>
                </li>
              </Link>
            </ul>
          </div>
          <ul className="nav-bar nav">
            <li className="nav-item ">
              <form class="form-inline">
                <div className="searchBar">
                  <input
                    class="form-control "
                    id="mainSearch"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    size="10"
                  />
                </div>
              </form>
            </li>
            <li className="nav-item">
              <button
                onClick={this.changeSearchColor}
                style={{}}
                className="btn btn-danger btn-sm ml-1"
              >
                <i className="fas fa-search"></i>
              </button>
            </li>

            <li className="nav-item">
              <Link to="/add-question">
                <button className="btn btn-danger btn-sm  ml-2 loginBtn">
                  {" "}
                  <i className="fas fa-clipboard-list"></i> Add
                </button>
              </Link>
              {this.state.user===null? <div></div>:
              (
                <button
                  
                  className="btn btn-danger btn-sm  ml-2 loginBtn"
                  onClick={this.logout}
                  style={{}}
                >
                  {" "}
                  <i className="fas fa-sign-in-alt"></i> LogOut
                </button> ) }
              
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
