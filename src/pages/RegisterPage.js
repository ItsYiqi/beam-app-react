import React, { Component } from 'react';
import RegisterBox from '../components/RegisterBox';
import NavBar from '../components/NavBar';

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
