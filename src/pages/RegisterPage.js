import React, { Component } from 'react';
import RegisterBox from '../components/RegisterBox';
import NavBar from '../components/NavBar';

// ---------------------------------------------------------
// Register Page, ('/register') when new user wants to register
// ---------------------------------------------------------
export default class RegisterPage extends Component{
    render(){
      return(
        <div>
          <NavBar />
          <div className="container-box">
            <RegisterBox/>
          </div>
        </div>

      );
    }
}
