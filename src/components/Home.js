import React from "react";
import { connect } from "react-redux";

import { userQuestionData } from "../utils/helper";
import NavBar from "./NavBar";

const Home = props => {
  console.log(props);
  return (
    <div>
      <NavBar />
      <div>This is HOME PAGE</div>
    </div>
  );
};

function mapStateToProps({ authUser, questions, users }) {
  const questionsSplit = userQuestionData(users, authUser, questions);

  return {
    authUser,
    questions,
    questionsSplit
  };
}

export default connect(mapStateToProps)(Home);
