import React, { Component } from 'react';
import LoginBox from '../components/LoginBox';
import NavBar from '../components/NavBar';

export default class LoginPage extends Component{
    // componentWillMount() {
    //   alert("This will mount");
    // }
    //
    // componentDidMount() {
    //   alert("This did mount");
    // }
    //
    // componentWillUnmount() {
    //   alert("This will unmount");
    // }
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
