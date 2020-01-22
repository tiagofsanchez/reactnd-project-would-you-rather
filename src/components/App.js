import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import LeaderboardPage from "./LeaderboardPage";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import NoMatch from "./NoMatch";
import Footer from "./Footer";
import QuestionPage from "./QuestionPage";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { isLogedIn } = this.props;

    return (
      <div>
        {!isLogedIn ? (
          <Route path="/" component={Login} />
        ) : (
          <Fragment>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/add" component={NewQuestion} />
              <Route exact path="/leaderboard" component={LeaderboardPage} />
              <Route exact path="/question/:id" component={QuestionPage} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </Fragment>
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
