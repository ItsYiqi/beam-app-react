import React,{ Component } from 'react';
import Navbar from '../components/NavBar';
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
          {!isAlreadyAuthenticated ? <Redirect to={{pathname: '/'}}/>: (
            <h1> welcome home </h1>
          )}
        </div>

      );

    }


}
