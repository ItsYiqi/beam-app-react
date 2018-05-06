import React,{ Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage';

export default class LoginBox extends Component{
    constructor(props){
      super(props);
      this.state = {
        username: '',
        password: '',
        authenticated: false
      }
    }

    handleUsernameChanged(event){
      this.setState({
        username: event.target.value
      });
    }

    handlePasswordChanged(event){
      this.setState({
        password: event.target.value
      });
    }

    isAuthenticated(){
     const token = localStorage.getItem('token');
     return token && token.length > 10;
     // return this.state.authenticated;
    }


    submitForm(event){
      event.preventDefault();

      const url = 'http://localhost:3333/api/login';
      const user = {
        'email': this.state.username,
        'password': this.state.password
      };
      axios.post(url, user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      // const user = {
      //   'email': 'nick.mitchell1@beamenergylabs.com',
      //   'password': 'password'
      // };
      // const user = {
      // 	"name": "yiqi",
      // 	"email": "yiqiy1@student.unimelb.edu.au",
      // 	"password": "1994yuyiqi",
      // 	"admin": true
      // };
      // this.setState({
      //   authenticated: true
      // })


      localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTI1NDkzNzY4LCJleHAiOjE1MjU1ODAxNjh9.WkOv7mzaX7SCusd3_dyTLFZS4upBj3gFKoE8nAA3wxg')
      this.setState();



    }


    render(){
      //console.log(this.state);
      const isAlreadyAuthenticated = this.isAuthenticated();
      return(
        <div>
          {isAlreadyAuthenticated ? <Redirect to={{pathname: "/welcome"}}/>:(
            <div className="container">
                <div className="card card-container">
                  <h5>LOGIN</h5>
                    <form className="form-signin" onSubmit = {this.submitForm.bind(this)}>
                        <span id="reauth-email" className="reauth-email"></span>
                        <input
                          type="email"
                          id="inputEmail"
                          className="form-control"
                          placeholder="Email address"
                          value = {this.state.username}
                          onChange = {this.handleUsernameChanged.bind(this)}
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
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit" >Sign in</button>
                    </form>
                    <a href="#" className="forgot-password">
                        Forgot the password?
                    </a>
                </div>
            </div>
          )}
        </div>
      );
    };


}
