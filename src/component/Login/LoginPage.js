import React from "react";
import ReactDOM from "react-dom"
import "../../css/LoginPage.css";
import fire from "../../Fire"
import ScrollTop from "../../scrollTop"
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }
  
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      
    }).catch((error) => {
        alert("Wrong Email or Password , try again")
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      alert("singup Successfully")
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        alert("Cant singup you right now")
      })
  }
  render() {
    return (
      
      <div className="background-image">
       
        <div className="login-wrap wow fadeInUp">
          <div className="login-html">
            <input
              id="tab-1"
              type="radio"
              name="tab"
              className="sign-in"
              defaultChecked
            />
            <label htmlFor="tab-1" className="tab">
              Login
            </label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label htmlFor="tab-2" className="tab">
              Sign Up
            </label>
            <div className="login-form">
              <div className="sign-in-htm">
              <form>
      <div class="form-group">
       <label for="exampleInputEmail1">Email address</label>
       <input autoFocus value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
       <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
       <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type="submit" onClick={this.login} class="btn btn-danger">Login</button>
      
 </form>
                <div className="hr" />
                <div className="foot-lnk">Forgot Password?</div>
              </div>
              <div className="sign-up-htm">
              <div class="form-group">
       <label for="exampleInputEmail1">User Name</label>
       <input  type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter user name" />
    
      </div>
      <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
                <div class="form-group">
       <label for="exampleInputEmail1">Repeat Password</label>
       <input  type="password" class="form-control" id="exampleInputEmail1"  placeholder="repeat password" />
    
      </div>
                <div class="form-group">
       <label for="exampleInputEmail1">Email address</label>
       <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    
      </div>
                <button onClick={this.signup} className="btn btn-danger">Signup</button>
                </div>
                <div className="hr" />
              
              </div>
            </div>
          </div>
        </div>
      
    );
  }
}
export default LoginPage;
