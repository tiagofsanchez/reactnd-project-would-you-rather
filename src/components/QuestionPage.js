import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, Form, Radio } from "semantic-ui-react";

import styled from "@emotion/styled";

import { handleSaveAnswer } from "../actions/questions";
import NavBar from "./NavBar";
import NoMatch from "./NoMatch";

/* STYLED COMPONENT */

const PageContainer = styled.div`
  padding-top: 120px;
`;

const CardContainer = styled.div`
  width: 70%;
  margin: auto;
  border: solid #e03997 1px;
  padding: 10px 20px 10px 20px;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const BtnContainer = styled.div`
  width: 70%;
  margin: auto;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 80px;
`;

class QuestionPage extends Component {
  state = {
    value: null,
    isAnswered: false
  };

  componentDidMount() {
    const { question } = this.props;
    window.scrollTo(0, 0);
    console.log(question);
  }

  handleSubmit = e => {
    e.preventDefault();
    const { authUser, id, handleSaveAnswer } = this.props;
    const { value } = this.state;
    handleSaveAnswer(authUser, id, value);
    this.setState(prevState => ({
      ...prevState,
      isAnswered: true
    }));
  };

  handleChange = (e, { value }) => {
    this.setState({ value });
  };

  handleClick = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { name, avatarURL, optionOne, optionTwo, id, isIdTrue } = this.props;
    const { value, isAnswered } = this.state;

    if (isAnswered) {
      return <Redirect to={`/question-result/${id}`} />;
    }

    let btnDisabled = true;
    if (value !== null) {
      btnDisabled = false;
    }

    return (
      <Fragment>
        <NavBar history={this.props.history}/>
        {isIdTrue ? (
          <Fragment>
            <PageContainer>
              <CardContainer>
                <Flex
                  style={{
                    backgroundColor: `#f9f9f9`,
                    padding: `25px`,
                    borderRadius: `5px`,
                    flex: `1 1 160px`,
                    marginRight: `15px`
                  }}
                >
                  <Avatar src={avatarURL} alt={name} />
                  <h4 style={{ margin: `none` }}>{name}</h4>
                </Flex>
                <Flex
                  style={{
                    alignItems: `baseline`,
                    flex: `4 1 300px`,
                    marginTop: `15px`
                  }}
                >
                  <h2 style={{ color: `#e61a8d`, fontStyle: `bold` }}>
                    Would you rather...{" "}
                  </h2>
                  <Form style={{ width: `100%` }} onSubmit={this.handleSubmit}>
                    <Form.Field style={{ textAlign: `initial` }}>
                      <Radio
                        label={optionOne}
                        name="radioGroup"
                        value="optionOne"
                        onChange={this.handleChange}
                        checked={value === "optionOne"}
                      />
                      <h4 style={{ margin: `10px 0px 10px 0px` }}>or</h4>
                      <Radio
                        label={optionTwo}
                        name="radioGroup"
                        value="optionTwo"
                        onChange={this.handleChange}
                        checked={value === "optionTwo"}
                      />
                    </Form.Field>
                    <Button
                      content="Submit"
                      color="pink"
                      floated="right"
                      type="submit"
                      disabled={btnDisabled}
                    />
                  </Form>
                </Flex>
              </CardContainer>
            </PageContainer>
            <BtnContainer>
              <Button
                content="Back"
                basic
                color="pink"
                onClick={this.handleClick}
              />
            </BtnContainer>
          </Fragment>
        ) : (
          <NoMatch />
        )}
      </Fragment>
    );
  }
}

function mapStateToProps({ questions, users, authUser }, props) {
  const id = props.match.params.id;
  let { question, avatarURL, name, optionOne, optionTwo } = "";

  const isIdTrue = id in questions;
  if (isIdTrue === true) {
    question = questions[id];
    avatarURL = users[question.author].avatarURL;
    name = users[question.author].name;
    optionOne = question.optionOne.text;
    optionTwo = question.optionTwo.text;
  }

  return {
    id,
    question,
    avatarURL,
    name,
    optionOne,
    optionTwo,
    questions,
    authUser,
    isIdTrue
  };
}

export default connect(mapStateToProps, { handleSaveAnswer })(QuestionPage);
