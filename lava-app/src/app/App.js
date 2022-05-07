import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import AppHeader from '../common/AppHeader';
import Home from '../home/Home';
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import Profile from '../user/profile/Profile';
import EditProfile from '../components/EditProfile';
import OAuth2RedirectHandler from '../user/oauth2/OAuth2RedirectHandler';
import Filter from '../components/FilterTool';
import Friends from '../components/Friends';
import CalendarComp from '../components/Calendar';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import { getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants';
import PrivateRoute from '../common/PrivateRoute';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';
import { render } from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: true
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response,
        authenticated: true,
        loading: false
      });
    }).catch(error => {
      this.setState({
        loading: false
      });  
    });    
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
    Alert.success("You're safely logged out!");
  }

  componentDidMount() {
    window.onload = function() {
      if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
      }
    }
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    if(this.state.loading) {
      return <LoadingIndicator />
    }

    return (
      <div className="app" style={{height:"100vh"}}>
        <div className="app-top-box">
        <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout} />
        </div>
        <div className="app-body">
            <Switch>
            <Route exact path="/" component={Home}></Route>           
            <PrivateRoute path="/profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
              component={Profile}>
                <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout} />
              </PrivateRoute>
            <PrivateRoute path="/find" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
              component={Filter}>
                <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout} />
              </PrivateRoute>
            <PrivateRoute path="/editProfile" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
              component={EditProfile}>
                <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout} />
              </PrivateRoute>
            <PrivateRoute path="/studybuddies" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
              component={Friends}>
                <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout} />
              </PrivateRoute>
              
            <PrivateRoute path="/calendar" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
              component={CalendarComp}>
                <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout} />
              </PrivateRoute>
            <Route path="/login"
              render={(props) => <Login authenticated={this.state.authenticated} {...props} />}>
                <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout} />
              </Route>
            <Route path="/signup"
              render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}>
                <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout} />
              </Route>
              
            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}>
              <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout} /></Route>  
            <Route component={NotFound}></Route>
            </Switch>
        </div>
        <Alert stack={{limit: 3}} 
          timeout = {3000}
          position='top-right' effect='slide' offset={65} />
      </div>
    );
  }
}

export default App;
