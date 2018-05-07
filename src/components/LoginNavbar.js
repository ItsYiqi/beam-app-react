import React,{ Component } from 'react';

export default class LoginNavbar extends Component{
    render(){
      return(
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container">
            <div className="navbar-header">
            <div className='dot'></div>
            <a className="navbar-brand js-scroll-trigger" href="/" id= "welcomebeam">WELCOME TO BEAM</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }


}
