import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import LoadingBar from "react-redux-loading";

import Login from "./components/Login";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <LoadingBar style={{ backgroundColor: "gray", height: "50px" }} />
        <Login />
      </div>
    );
  }
}

export default connect()(App);
