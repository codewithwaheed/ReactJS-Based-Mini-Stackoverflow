import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../body/sideBar";
import * as firebase from "firebase"
import InterestBar from "../body/interestBar";
import AddQuestion from "../body/feedComponents/addQuestion";
import ProfilePic from "../../images/profile.jpg"
class Profile extends React.Component {
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
    username:"",
    location:'',
    email:"",
    age:"",
    Description:""
  }
  componentWillMount(){
    if(!firebase.apps.length)
    {
      firebase.initializeApp(this.firebaseConfig)
    }
   const db= firebase.firestore()
   db.collection("user").get().then(snapshot=>{
     
     snapshot.forEach(doc=>{
      const Username=doc.data().name
      const Location=doc.data().location
      const email=doc.data().email
      const Age=doc.data().age
      const Description=doc.data().description
      this.setState({
        username:Username,
        location :Location,
        email:email,
        age:Age,
        Description:Description
      })

       
     })
   })
  }
  render() {
    return  <div className="container-fluid">
    <div className="row">
      <div className=" col-md-2">
        <SideBar />
      </div>
      <div className="col-xm-12 col-md-7 bg-light my-2">
        <div className=" wow fadeInUp" data-wow-delay="0.3s">
        <div class="bg-light shadow rounded">
            <div>
  <div className="px-4 pt-0 pb-4 " style={{backgroundColor:"#edbb99"}}>
    <div className="media align-items-end profile-header">
      <div className="profile mr-3"><img src={ProfilePic} alt="..." width={130} className="rounded mb-2 img-thumbnail" />
      <a href="#" className="btn btn-danger btn-sm btn-block">Edit profile</a></div>
      <div className="media-body mb-5 ">
  <h4 className="mt-0 mb-0">{this.state.username}</h4>
  <p className="small mb-4"> <i className="fa fa-map-marker mr-2" />{this.state.location}</p>
      </div>
    </div>
  </div>
  <div className="bg-light p-4 d-flex justify-content-end text-center">
    <ul className="list-inline mb-0">
      <li className="list-inline-item">
        <h5 className="font-weight-bold mb-0 d-block">241</h5><small className="text-muted"> <i className="fas fa-book mr-1" />Questions</small>
      </li>
      <li className="list-inline-item">
        <h5 className="font-weight-bold mb-0 d-block">84K</h5><small className="text-muted"> <i className="fa fa-user-circle mr-1" />Followers</small>
      </li>
    </ul>
  </div>
  <div className="py-4 px-4">
    <div className="  mb-3">
      <h5 className="mb-0">Bio</h5><br></br>
      <p>Email :{this.state.email} <br></br>
         Age: {this.state.age}<br></br>
         Description:{this.state.Description} <br></br>
      </p>
    </div>
    
   
  </div>
  {/* End profile widget */}
</div>
        </div>
      </div></div>
      <div className="col-sm-12 col-md-3">
        <InterestBar />
      </div>
    
  </div> </div>;
  }
}
export default Profile;
