import React, { Component } from 'react';
import LoginBox from '../components/LoginBox';
import NavBar from '../components/NavBar';

export default class LoginPage extends Component{
  
    render(){
      return(
        <div>
          <NavBar />
          <div className="container-box">
            <LoginBox/>
          </div>
        </div>

      );
    }
}
