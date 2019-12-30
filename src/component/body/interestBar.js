import React from "react";
import * as firebase from "firebase"
import { Link} from "react-router-dom"
class interestBar extends React.Component {
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
    questions: null
  }
  componentWillMount(){
    if(!firebase.apps.length)
    {
      firebase.initializeApp(this.firebaseConfig)
    }
   const db=firebase.firestore()

   db.collection("questions")
    .get()
    .then(snapshot=>{
      const questions=[]
      snapshot.forEach(doc=>{
        const data=doc.data()
        questions.push(data)
      })
      this.setState({
        questions: questions
      })

    })
    .catch(error=>
    {
      alert("Oops, cant load the feed")
    }) 
  }
  render() {
    return (
      <div className="bg-light wow fadeInUp" id="interestBarBox">
        <p className="interestHead"> You Might Like these</p>
        <div className="list-group ">
          {
            this.state.questions&&
            this.state.questions.map(question=>{

               return(
                 <div>
                 <ul className=" list-group sideBarList" id="List">
                 <li>
                   <Link class="list-group-item  bg-light" href="#">
                     <p className="sideitem">
                      {question.title}
                     </p>
                   </Link>
                 </li>
                 </ul>
   </div>
               )
            })
          }
        </div>
      </div>
    );
  }
}
export default interestBar;
