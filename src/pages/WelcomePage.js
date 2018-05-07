import React,{ Component } from 'react';
import LoginNavbar from '../components/LoginNavbar';
import { Redirect } from 'react-router-dom';

// only show the page when the user are authenticated
export default class WelcomePage extends Component{
    constructor(props){
      super(props);
    }
    isAuthenticated(){
     const token = localStorage.getItem('token')  ;
     return token && token.length > 10;
    }

    render(){
      const isAlreadyAuthenticated = this.isAuthenticated();
      return(
        <div>
          {false ? <Redirect to={{pathname: '/'}}/>: (
            <div>
              <LoginNavbar />
              <div className="container-box">
                <h1>welcome</h1>
                
              </div>
            </div>


          )}
        </div>

      );

    }


}
