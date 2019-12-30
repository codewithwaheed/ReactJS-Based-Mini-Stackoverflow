import React from "react";
import SideBar from "../sideBar";
import ScrollToTop from "../../../scrollTop"
import InterestBar from "../interestBar";
import * as firebase from "firebase"
class AddQuestion extends React.Component {
  firebaseConfig = {
    apiKey: "AIzaSyCQ5b3_Nd1L3Uu780jrrfZUoTz6Wv8ttWo",
    authDomain: "projecttest-c7dad.firebaseapp.com",
    databaseURL: "https://projecttest-c7dad.firebaseio.com",
    projectId: "projecttest-c7dad",
    storageBucket: "projecttest-c7dad.appspot.com",
    messagingSenderId: "867617964118",
    appId: "1:867617964118:web:6860c99bc7dc4b55e5fbf7",
    measurementId: "G-7XR9BTRND5"
  };
  
 

  
   constructor(props)
   {
     super(props)
     
   }
   componentDidUpdate(prevProps, prevState) {
    this._input.focus();
  }

  state = {
    questions: null,
    stateOfReview: true,
    title:'',
    body:'',
    tags:'',
    time:'',
    questionCount:"",
    valueTitle :"",
    valueBody:"",
    valueTag:""

  };
 
  getTitle=(e)=>{
    this.setState({
      valueTitle:e.target.value    })
  }
  getBody=(e)=>{
    this.setState({
      valueBody:e.target.value    })
  }
  gettags=(e)=>{
    this.setState({
      valueTag:e.target.value    })
  }
  addvalues=()=>{if(!firebase.apps.length)
    {
      firebase.initializeApp(this.firebaseConfig)
    }
   const db=firebase.firestore()
   const title=this.state.valueTitle
   const body=this.state.valueBody
   const tag=this.state.valueTag

   db.collection("questions")
   .add({
     title:title,
     body:body,
    tags:tag,
    time:new Date()

   })
   db.collection("Notifications")
   .add({
    title:title

   })


    this.setState({
      stateOfReview: false
    });
    setTimeout(function () {
      window.location.reload();
  }, 5000); 

  }
  render() {
    return (
      
      <div>
        <ScrollToTop></ScrollToTop>
        <div className="container-fluid">
          <div className="row">
            <div className=" col-md-2">
              <SideBar />
            </div>
            <div
              className="col-xm-12 col-md-7 bg-light questionBox wow fadeInDown"
              data-wow-delay="0.3s"
            >
              <div className="row mt-4">
                <div className="col">
                  <div className="text-center">
                    <h1 className="headtitle">Ask Your Question Here</h1>
                    <h5 className="headItem">Title</h5>
                    <p>write your Question in simple and be specific</p>
                    <input
                     className={this.state.focused ? "focused": ""}
                      autofocus="true"
                      ref={c => (this._input = c)}
                        onChange={this.getTitle}
                      type="text"
                      name="title"
                      placeholder="i.e:how to link css file in html?"
                     
                      size="45"
                    ></input>
                    <h5 className="headItem">Body</h5>
                    <p>wrtie your Question detail below</p>
                    <textarea onChange={this.getBody}
                      className="bodyText"
                      placeholder="Start writing from here "
                    ></textarea>
                    <h5 className="headItem">Tags</h5>
                    <p>
                      Add up to 5 tags. that help to understand he Question{" "}
                    </p>
                    <input onChange={this.gettags} 
                      type="text"
                      placeholder=" i.e  html , css , java"
                      size="45"
                    ></input>
                    <br></br>
                    <button
                      onClick={this.addvalues}
                      style={{
                        backgroundColor: this.state.stateOfReview
                          ? "#d9534f"
                          : "#5cb85c"
                      }}
                      className="btn btn-danger btnReview my-md-3"
                      data-toggle="collapse"
                      data-target="#demo"
                    >
                      Review Question
                    </button>
                    <div id="demo" class="collapse text-center">
                      <p>Your question will be Live after review</p>
                    </div>
                  </div>

                  <p></p>
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
export default AddQuestion;
