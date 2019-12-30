import React from "react";
import Header from "./component/Header";
import MainContant from "./component/BodyLogin";
import Footer from "./component/Footer";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./component/navComponent/Home";
import About from "./component/navComponent/About";
import Group from "./component/navComponent/Group";
import Project from "./component/navComponent/Project";
import Notification from "./component/navComponent/Notification";
import LoginPage from "./component/Login/LoginPage";
import Java from "./component/Project/Java";
import UploadProject from "./component/Project/UploadProject";
import AddQuestion from "./component/body/feedComponents/addQuestion";
import Answer from "./component/sideBarComponent/Answer";
import Feed from "./component/sideBarComponent/Feed";
import Favourite from "./component/sideBarComponent/favourite";
import Profile from "./component/sideBarComponent/Profile";
import YourGroup from "./component/sideBarComponent/YourGroup";
import Tag from "./component/sideBarComponent/tags";
import ScrollTop from "./scrollTop"
import * as firebase from "firebase"
import fire from "./Fire"

class App extends React.Component {
  
  constructor() {
    super();
  
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
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

  render(){
  return (
    <div className="container-fluid">
      <Header />

      <div>
      <ScrollTop></ScrollTop>
        <Route path="/" exact >{this.state.user ?  ( <Home/>) : (<LoginPage />)}</Route>
        <Route path="/home" exact >{this.state.user ?  ( <Home/>) : (<LoginPage />)}</Route>
        <Route path="/about" exact ><About></About></Route>
        <Route path="/project" >{this.state.user ?  ( <Project/>) : (<LoginPage />)}</Route>
        <Route path="/group" exact>{this.state.user ?  ( <Group/>) : (<LoginPage />)}</Route>
        <Route path="/notification" >{this.state.user ?  ( <Notification/>) : (<LoginPage />)}</Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/project/Java" component={Java}></Route>
        <Route path="/project/upload" component={UploadProject}></Route>
        <Route path="/add-question" >{this.state.user ?  ( <AddQuestion/>) : (<LoginPage />)}</Route>
        <Route path="/answer" component={Answer}></Route>
        <Route path="/feed" component={Feed}></Route>
        <Route path="/favourite" component={Favourite}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/yourGroup" component={YourGroup}></Route>
        <Route path="/tag" component={Tag}></Route>
      </div>
      <Footer />
    </div>
  );
}
}
export default App;
