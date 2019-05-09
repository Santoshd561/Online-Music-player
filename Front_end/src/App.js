import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
// import 'bootstrap/dist/css/bootstrap.min.css'

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";


import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Chart from "./components/auth/Chart"

import "./App.css";
import ResetPassword from "./components/auth/ResetPassword";
import Home from "./Home";
import Charlie from "./charlie"
import Setia from "./setia"
import Honey from "./honeysingh"
import Atif from "./atif"
import Arman from "./arman"
import Arijit from "./arijit"
import About from "./About"
import Contact from "./Contact"


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {/* <Navbar /> */}
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/resetPassword" component={ResetPassword}/>
            <Route exact path="/Chart" component={Chart}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/Charlie" component={Charlie} />
            <Route exact path="/Setia" component={Setia} />
            <Route exact path="/HoneySingh" component={Honey} />
            <Route exact path="/Arijit" component={Arijit} />
            <Route exact path="/Atif" component={Atif} />
            <Route exact path="/Arman" component={Arman} />
            <Route exact path="/AboutUs" component={About} />
            <Route exact path="/Contact" component={Contact} />
            
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
