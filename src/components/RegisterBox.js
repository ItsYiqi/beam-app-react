import React,{ Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

// -------------------------------------------------------
// REGISTER Form Component : Handle new user register request
// ---------------------------------------------------------
export default class RegisterBox extends Component{
    // this.state to store the user information
    constructor(props){
      super(props);
      this.state = {
        username: '',
        email: '',
        password: '',
        admin:false,
        authenticated:false,
        error:false
      }

    }


    // handle user input - username
    handleUsernameChanged(event){
      this.setState({
        username: event.target.value
      });
    }

    // handle user input - email
    handleEmailChanged(event){
      this.setState({
        email: event.target.value
      });
    }
    // handle user input - password
    handlePasswordChanged(event){
      this.setState({
        password: event.target.value
      });
    }

    // handle user input - admin
    handleAdminChanged(event){
      this.setState({
        admin: !this.state.admin
      });
    }

    // Authenticate user and check errors
    isAuthenticated(){
      const storage = sessionStorage.getItem('token');
      return storage && storage.length>10;
    }

    // check if any error when login
    isError(){
      return this.state.error;
    }

  // when click sign in button using axios to post login user detail
    submitForm(event){
      event.preventDefault();
      const url = 'http://localhost:3333/register';
      const newUser = {
        "name": this.state.username,
      	"email": this.state.email,
      	"password": this.state.password,
      	"admin": this.state.admin
      };
      // POST request to api to register new user
      axios.post(url, newUser)
      .then(response => {
        if(response.data.success){
          sessionStorage.setItem('token','registertemptoken1234');
          sessionStorage.setItem('username',this.state.username);
          alert('register success!');
          this.setState({
            authenticated:true
          });

        }else {
          this.setState({
            error: true
          })
        }
      })
      .catch(function (error) {
        this.setState({
          error: true
        })
      });

    }

    render(){
      // alert user if error register
      const error = this.isError();
      const errortag = error? (
        <div className="alert alert-danger" role="alert"> Oops..Try Again!</div>
      ):(<div></div>);

      // if success authenticated redirect to welcome page
      const isAlreadyAuthenticated = this.isAuthenticated();
      if (isAlreadyAuthenticated){
        console.log('hey');
        return (<Redirect to={{
            pathname: '/welcome'
        }} />)

      }

      return(
        <div className="container">
            <div className="card card-container">
              <h5>REGISTER</h5>
                <form className="form-signin" onSubmit = {this.submitForm.bind(this)}>
                    <span id="reauth-email" className="reauth-email"></span>
                    <input
                      type="text"
                      id="inputText"
                      className="form-control"
                      placeholder="User Name"
                      value = {this.state.username}
                      onChange = {this.handleUsernameChanged.bind(this)}
                      required autoFocus />

                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email address"
                      value = {this.state.email}
                      onChange = {this.handleEmailChanged.bind(this)}
                      required autoFocus />

                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      value = {this.state.password}
                      onChange = {this.handlePasswordChanged.bind(this)}
                      required />

                    <div id="remember" className="checkbox">
                        <label>
                            <input type="checkbox" checked = {this.state.admin} onChange = {this.handleAdminChanged.bind(this)}/> Admin
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit" >Sign Up</button>
                </form>
            </div>
        </div>
      );
    }
}
