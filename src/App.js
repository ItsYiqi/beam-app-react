import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import WelcomePage from './pages/WelcomePage';
import RegisterPage from './pages/RegisterPage';


class App extends Component {

  // identify routers to route to different pages
  render() {
    return (
      <div>
      <Router >
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/register" component={RegisterPage}/>
          <Route path='/welcome' render={() => (<WelcomePage username = {sessionStorage.getItem('username')}/> )}/>
        </Switch>
      </Router>
    </div>
    );
  }
}

export default App;
