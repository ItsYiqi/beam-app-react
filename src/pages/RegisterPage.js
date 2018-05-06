import React, { Component } from 'react';
import RegisterBox from '../components/RegisterBox';
import Navbar from '../components/NavBar';

export default class RegisterPage extends Component{
    render(){
      return(
        <div>
          <Navbar/>
          <div>
            <p>register</p>
          </div>
          <div className="container">
            <RegisterBox/>
          </div>
        </div>

      );
    }
}
