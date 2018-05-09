import React,{ Component } from 'react';
import LoginNavbar from '../components/LoginNavbar';
import { Redirect } from 'react-router-dom';

// ---------------------------------------------------------
// Welcome Page, ('/welcome') only show when the user login or registered
// ---------------------------------------------------------
export default class WelcomePage extends Component{
    constructor(props){
      super(props);
      this.state = {
        redirect: false
      }
    }

    // Check the sessionStorage to authenticate user
    componentWillMount(){
      if(sessionStorage.getItem('token')){
        console.log('success login to welcome page');
      }else {
        console.log('cant find token');
        this.setState({
          redirect: true
        });
      }
    }


    render(){
      // if not authenticated redirect to the HomePage
      if(this.state.redirect){
          return (<Redirect to= {'/'}/>)
      }

      return(
          <div>
            <LoginNavbar />
            <div className="container-box">
              <div className="container"></div>
              <h1 className="welcome-user">WELCOME HOME ! {this.props.username}</h1>
            </div>
          </div>
      );

    }


}
