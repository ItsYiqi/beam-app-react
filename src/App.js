import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import WelcomePage from './pages/WelcomePage';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/register" component={RegisterPage}/>
            <Route path='/welcome' component = {WelcomePage}/>
          </Switch>
        </div>
      </Router>
    </div>
    );
  }
}

export default App;
