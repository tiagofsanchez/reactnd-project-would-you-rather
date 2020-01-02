import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

import Login from "./Login";
import NavBar from "./NavBar";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { logedIn } = this.props;

    let app = <Login />;
    if (logedIn) {
      app = <NavBar />;
    }
    return <div>{app}</div>;
  }
}
function mapStateToProps({ authUser }) {
  return {
    logedIn: authUser !== null
  };
}

export default connect(mapStateToProps)(App);
