import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared"


class App extends Component {
  
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }

  render() {
    return <div className="App">This is my app</div>;
  }
}

function mapStateToProps({ users, questions, authUser }) {
  return {
    users,
    questions,
    authUser
  };
}

export default connect(mapStateToProps)(App);
