import React,{ Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class LoginBox extends Component{
    constructor(props){
      super(props);
      this.state = {
        username: '',
        password: '',
        authenticated: false,
        error: false
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
      const storage = sessionStorage.getItem('token');
      return storage && storage.length>10;
    }

    isError(){
      return this.state.error;
    }


    submitForm(event){
      event.preventDefault();
      const url = 'http://localhost:3333/api/login';
      const user = {
        'email': this.state.username,
        'password': this.state.password
      };

      axios.post(url, user)
      .then(response => {
        if(response.data.success){
          sessionStorage.setItem('token', response.data.token);
          alert('login success!');
          this.setState({
            authenticated: true
          })

        }
        else{
          //alert('try again!');
          this.setState({
            error: true
          });
        }
      })
      .catch(function (error) {
        //alert('try again!')
      });

    }

    render(){

      const isAlreadyAuthenticated = this.isAuthenticated();
      if (isAlreadyAuthenticated)
        return (<Redirect to={{
            pathname: '/welcome'
        }} />)

      const error = this.isError();
      const errortag = error? (
        <div className="alert alert-danger" role="alert"> Oops..Try Again!</div>
      ):(<div></div>);

      return(
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
                        {errortag}
                        <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit" >Sign in</button>
                    </form>
                    <a href="#" className="forgot-password">
                        Forgot the password?
                    </a>
                </div>
            </div>
      );
    };


}
