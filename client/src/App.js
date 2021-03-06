import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import Splash from "./pages/Splash";
import Login from './pages/Login';
import Signup from "./pages/Signup";
import Dataroom from "./pages/dataroom";
import StickyFoot from "./components/Footer";
import NoMatch from "./pages/NoMatch";
import SLMDNav from "./components/Nav";


// see https://reacttraining.com/react-router/web/example/auth-workflow

var Style = {
  Main: {
    backgroundImage: "url(" + require("./images/StLouArch.jpg") + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: 52,
    height: 1000

  }
}

export default function App() {
  return (
    <Router>
      <div >

        <SLMDNav />


        <Switch>
          <ConnectedPublicRoute exact path="/" component={Splash} />
          <ConnectedPublicRoute path="/login" component={Login} />
          <ConnectedPublicRoute path="/signup" component={Signup} />
          <ConnectedPrivateRoute exact path="/dataroom" component={Dataroom} />



          <Route path="*"><NoMatch /></Route>
        </Switch>

      </div>
      <StickyFoot />
    </Router>

  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ component: Component, ...rest }) {

  return (
    <Route
      {...rest}
      render={routeProps =>
        rest.user ? (
          <Component {...routeProps} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: routeProps.location }
              }}
            />
          )
      }
    />
  );
}

const ConnectedPrivateRoute = connect(
  // mapStateToProps
  state => ({ user: state.user.details })
)(PrivateRoute);

// A wrapper for <Route> that redirects to the books 
// screen if you're authenticated.
function PublicRoute({ component: Component, ...rest }) {

  return (
    <Route
      {...rest}
      render={routeProps =>
        !rest.user ? (
          <Component {...routeProps} />
        ) : (
            <Redirect
              to={{
                pathname: "/dataroom"
              }}
            />
          )
      }
    />
  );
}

const ConnectedPublicRoute = connect(
  // mapStateToProps
  state => ({ user: state.user.details })
)(PublicRoute);
