import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Splash from "./pages/Splash";
import Dataroom from "./pages/dataroom";
import StickyFoot from "./components/Footer";
import NoMatch from "./pages/NoMatch";
import SLMDNav from "./components/Nav";

import { isLoggedIn } from './utils/Authentication'
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

      <SLMDNav />
      <div style={Style.Main}>

        <Switch>
          <PublicRoute exact path="/" component={Splash} />
          <PublicRoute path="/dataroom" component={Dataroom} />
         

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
        isLoggedIn() ? (
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

// A wrapper for <Route> that redirects to the books 
// screen if you're authenticated.
function PublicRoute({ component: Component, ...rest }) {

  return (
    <Route
      {...rest}
      render={routeProps =>
        !isLoggedIn() ? (
          <Component {...routeProps} />
        ) : (
            <Redirect
              to={{
                pathname: "/books"
              }}
            />
          )
      }
    />
  );
}
