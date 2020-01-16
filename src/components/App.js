import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import LeaderboardPage from "./LeaderboardPage";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import QuestionPage from "./QuestionPage";
import QuestionResultPage from "./QuestionResultPage";
import NoMatch from './NoMatch';

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
            <Route exact path="/" component={Home} />
            <Route exact path="/add" component={NewQuestion} />
            <Route exact path="/leaderboard" component={LeaderboardPage} />
            <Route exact path="/question/:id" component={QuestionPage} />
            <Route
              exact
              path="/question-result/:id"
              component={QuestionResultPage}
            />
            <Route component={NoMatch}/>
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
