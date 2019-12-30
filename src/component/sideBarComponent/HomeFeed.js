import React from "react";
import * as firebase from "firebase"
import {Link} from "react-router-dom"
class HomeFeed extends React.Component {
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
    return(<div>
      <div className="row mt-4">
                <div className="col">
                  <Link to="/add-question">
                    <button
                      className="btn btn-danger mb-3"
                      style={{ float: "right" }}
                    >
                      <i className="fas fa-upload"> </i> Add Question
                    </button>
                  </Link>
                  <h3 className="projectHead">Feed</h3></div></div>
      {this.state.questions&&
      this.state.questions.map(question=>{

                  return(
                      <div>


<div class="card wow fadeInUp my-3">
  <div class="card-header">
  <Link to=""><h4 class="card-title">{question.title}</h4></Link>
    </div>
  <div class="card-body"> 
    
                  
  <p class="card-text">{question.body}</p>
  </div>
  <div class="card-footer text-muted">
  <div style={{ float: "right" }}>
  <button className="btn btn-danger btn-sm mr-1"><i className="fas fa-star"></i></button>
                      <button className="btn btn-danger btn-sm mr-1"><i className="fas fa-share"></i></button>
                      <button className="btn btn-danger btn-sm mr-1"><i className="fas fa-plus"></i></button>
  </div><p>{question.tags}</p><p style={
    {fontSize:"10px"}
  }>Added at :{question.time.toDate().toString()}</p> 
     
  </div></div>


                      </div>
                  )
                })
                }
  </div> 
  )
  }
}
export default HomeFeed;
