import React,{ Component } from 'react';
import LoginNavbar from '../components/LoginNavbar';
import { Redirect } from 'react-router-dom';

// only show the page when the user are authenticated
export default class WelcomePage extends Component{
    constructor(props){
      super(props);
      this.state = {
        redirect: false
      }
    }

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
