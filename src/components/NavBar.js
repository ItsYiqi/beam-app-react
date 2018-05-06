import React,{ Component } from 'react';

export default class NavBar extends Component{
    render(){
      return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">welcome to beamenergylabs</a>
              </li>
            </ul>
          </div>
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
             <ul className="navbar-nav ml-auto">
                 <li className="nav-item">
                    <a href="/login" className="btn btn-outline-dark">LOGIN</a>
                    <a href="/register" className="btn btn-outline-dark">Register</a>
                 </li>
             </ul>
         </div>
        </nav>
      );
    }


}
