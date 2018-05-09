import React,{ Component } from 'react';
import NavBar from '../components/NavBar';

// ---------------------------------------------------------
// Home Page, ('/') 
// ---------------------------------------------------------
export default class HomePage extends Component{
    render(){
      return(
        <div>
          <NavBar/>
          <div className="container-box">
            <div className="container"></div>
            <h1 className="welcome-user">
              REACT APP BY YIQI :)
            </h1>
          </div>
        </div>

      );

    }


}
