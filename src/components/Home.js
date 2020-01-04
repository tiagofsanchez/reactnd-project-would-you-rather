import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { Button, ButtonGroup } from "semantic-ui-react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

import { userQuestionData } from "../utils/helper";
import NavBar from "./NavBar";

/* STYLED COMPONENTS */
const HomeContainer = styled.div`
  width: 80%;
  margin: auto;
`;

class Home extends Component {
  state = {
    toBeAnswered: true
  };

  tbAnsweredHandler = () => {
    this.setState({
      toBeAnswered: true
    });
  };

  answeredHandler = () => {
    this.setState({
      toBeAnswered: false
    });
  };

  render() {
    const { toBeAnswered } = this.state;
    const { answeredId, unansweredId } = this.props.questionsSplit;

    const questionsToAnswer = unansweredId.map(id => <p>{id}</p>);

    const answeredQuestions = answeredId.map(id => <p>{id}</p>);

    return (
      <Fragment>
        <NavBar />
        <HomeContainer>
          <ButtonGroup fluid basic size="big">
            <Button active={toBeAnswered} onClick={this.tbAnsweredHandler}>
              To be answered
            </Button>
            <Button.Or />
            <Button active={!toBeAnswered} onClick={this.answeredHandler}>
              Already answered
            </Button>
          </ButtonGroup>
          <div>{toBeAnswered ? questionsToAnswer : answeredQuestions}</div>
        </HomeContainer>
      </Fragment>
    );
  }
}

function mapStateToProps({ authUser, questions, users }) {
  const questionsSplit = userQuestionData(users, authUser, questions);

  return {
    authUser,
    questions,
    questionsSplit
  };
}

export default connect(mapStateToProps)(Home);
