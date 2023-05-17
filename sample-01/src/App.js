import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

import { Provider } from "react-redux";
import store from "./store";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
import { connect } from "react-redux";
initFontAwesome();

const App = ({ruser}) => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }
  

  return (
   
      <Router history={history}>
        <div id="app" className="d-flex flex-column h-100">
          <NavBar />
          <Container className="flex-grow-1 mt-5">
          {JSON.stringify(ruser, null, 2)}
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </Container>
          <Footer />
        </div>
      </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    ruser: state.ruser,
  };
};

export default connect(mapStateToProps, null)(App);
