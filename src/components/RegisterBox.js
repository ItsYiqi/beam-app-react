import React,{ Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

let successRegister = false;
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
      return this.state.authenticated;
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

      axios.post(url, newUser)
      .then(response =>{
        if(response.data.success){
          alert('yes');
          this.setState({
            authenticated:true
          });
          this.context.router.push({
            pathname: '/welcome',
            state: {email: this.state.email}
        })
        };
      })
      .catch(function (error) {
        console.log(error);
      });

    }



    render(){
      console.log(this.state);
      const isAlreadyAuthenticated = this.isAuthenticated();
      if (isAlreadyAuthenticated)
        return (<Redirect to={{
            pathname: '/welcome',
            state: { referrer: this.state.email }
        }} />)

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
