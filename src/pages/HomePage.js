import React,{ Component } from 'react';
import Navbar from '../components/NavBar';

export default class HomePage extends Component{
    render(){
      return(
        <div>
          <Navbar/>
          { this.props.children }
          <div>
            <p>Home</p>
          </div>
          <div className="container">
          </div>
        </div>

      );

    }


}
