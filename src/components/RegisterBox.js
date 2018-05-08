import React,{ Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class RegisterBox extends Component{
    constructor(props){
      super(props);
      this.state = {
        username: '',
        email: '',
        password: '',
        admin:false,
        authenticated:false,
      }

    }

    handleUsernameChanged(event){
      this.setState({
        username: event.target.value
      });
    }
    handleEmailChanged(event){
      this.setState({
        email: event.target.value
      });
    }
    handlePasswordChanged(event){
      this.setState({
        password: event.target.value
      });
    }
    handleAdminChanged(event){
      this.setState({
        admin: !this.state.admin
      });
    }

    isAuthenticated(){
      const storage = sessionStorage.getItem('token');
      return storage && storage.length>10;
    }

    submitForm(event){
      event.preventDefault();
      const url = 'http://localhost:3333/register';
      const newUser = {
        "name": this.state.username,
      	"email": this.state.email,
      	"password": this.state.password,
      	"admin": this.state.admin
      };
      // post request to api to register new user
      axios.post(url, newUser)
      .then(response => {
        if(response.data.success){
          sessionStorage.setItem('token','registertemptoken1234');
          sessionStorage.setItem('username',this.state.username);
          alert('register success!');
          this.setState({
            authenticated:true
          });

        };
      })
      .catch(function (error) {
        alert('try again!')
      });

    }

    render(){
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
