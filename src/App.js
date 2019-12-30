import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";

import Login from "./components/Login";
import NavBar from "./components/NavBar";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <NavBar />
        <div style={{ height: "100px" }}></div>
        <Login />
      </div>
    );
  }
}

export default connect()(App);
