import React, { Component } from 'react';
import LoginBox from '../components/LoginBox';
import Navbar from '../components/NavBar';

export default class LoginPage extends Component{
    render(){
      return(
        <div>
          <Navbar/>
          <div>
            <p>Home</p>
          </div>
          <div className="container">
            <LoginBox/>
          </div>
        </div>

      );
    }
}
