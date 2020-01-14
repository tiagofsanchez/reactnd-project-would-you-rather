import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { Button, ButtonGroup } from "semantic-ui-react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

import { userQuestionData } from "../utils/helper";
import NavBar from "./NavBar";
import QuestionCard from "./QuestionCard";

/* STYLED COMPONENTS */
const HomeContainer = styled.div`
  width: 80%;
  margin: auto;
`;

const Flex = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const Img = styled.img`
  height: 20px;
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

  let;

  render() {
    const { toBeAnswered } = this.state;
    const { answeredId, unansweredId } = this.props.questionsSplit;

    const questionsToAnswer = unansweredId.map(id => (
      <QuestionCard key={id} id={id} toBeAnswered={toBeAnswered} />
    ));

    const answeredQuestions = answeredId.map(id => (
      <QuestionCard id={id} key={id} toBeAnswered={toBeAnswered} />
    ));

    return (
      <Fragment>
        <NavBar />
        <HomeContainer>
          <Flex>
            <Button.Group fluid>
              <Button
                active={toBeAnswered}
                basic={!toBeAnswered}
                color="pink"
                onClick={this.tbAnsweredHandler}
              >
                To be answered
              </Button>
              <Button
                active={!toBeAnswered}
                basic={toBeAnswered}
                color="pink"
                onClick={this.answeredHandler}
              >
                Check this answers!
              </Button>
            </Button.Group>
          </Flex>
          <div>{toBeAnswered ? questionsToAnswer : answeredQuestions}</div>
        </HomeContainer>
      </Fragment>
    );
  }
}

//TODO: need to sort the questions by timestamp

function mapStateToProps({ authUser, questions, users }) {
  const questionsSplit = userQuestionData(users, authUser, questions);

  return {
    authUser,
    questions,
    questionsSplit
  };
}

export default connect(mapStateToProps)(Home);
