import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import NavBar from "./NavBar";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { isLogedIn } = this.props;
    console.log(isLogedIn);

    return (
      <div>
        {!isLogedIn ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/" component={NavBar} />
          </Switch>
        )}
      </div>
    );
  }
}
function mapStateToProps({ authUser }) {
  return {
    isLogedIn: authUser !== null
  };
}

export default connect(mapStateToProps)(App);
