import React from "react";
import SideBar from "../body/sideBar";
import * as firebase from "firebase"
import InterestBar from "../body/interestBar";
import { Link } from "react-router-dom";
class Notification extends React.Component {
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

  state={
    title:null
  }
  componentWillMount()
  {
    if(!firebase.apps.length)
    {
      firebase.initializeApp(this.firebaseConfig)
    }
    const db= firebase.firestore()
    db.collection("Notifications").get().then(snapshot=>{
      
      const title=[]
      snapshot.forEach(doc=>{
        const data=doc.data()
        title.push(data)

        this.setState({
          title:title
        })
      })
      
      
    })
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
                  <h3 className="projectHead">Notification</h3>
            <ul className=" list-group sideBarList" id="List">
          
            {this.state.title===null ? 
         ( <li className="list-group-item bg-light wow fadeInDown" data-wow-delay="0.3s">
            <i className="fas fa-circle" style={{color:"#d35400"}}></i> There is no notification yet.</li>) :
              
    ( this.state.title&&this.state.title.map(titles=>{
      return(


        <div >
          
         <li className="list-group-item bg-light wow fadeInDown" data-wow-delay="0.3s">
    <i className="fas fa-circle" style={{color:"#d35400"}}></i> Your question "{titles.title}" is live now , please stay active for Healthy disscussion . Happy Learning !</li> 

        </div> 
      )
      })
     

              
    ) }
            </ul>
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
export default Notification;
