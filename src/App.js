import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import WelcomePage from './pages/WelcomePage';
import RegisterPage from './pages/RegisterPage';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
      <Router >
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/register" component={RegisterPage}/>
          <Route exact path='/welcome' component = {WelcomePage}/>
        </Switch>
      </Router>
    </div>
    );
  }
}

export default App;
