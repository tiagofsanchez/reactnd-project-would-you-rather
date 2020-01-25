import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { Button, Form, Radio } from "semantic-ui-react";
import styled from "@emotion/styled";

import { questionPageData } from "../utils/helper";
import { handleSaveAnswer } from "../actions/questions";
import NavBar from "./NavBar";
import NoMatch from "./NoMatch";
import QuestionResultPage from "./QuestionResultPage";

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
    value: null
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleSubmit = e => {
    e.preventDefault();
    const { authUser, id, handleSaveAnswer } = this.props;
    const { value } = this.state;
    handleSaveAnswer(authUser, id, value);
    this.setState(prevState => ({
      ...prevState,
      showResult: true
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
    console.log(this.props)
    const {
      name,
      avatarURL,
      optionOne,
      optionTwo,
      isIdTrue,
      id,
      location
    } = this.props;
    const { value, showResult } = this.state;
    
    //if the user is logged out and and the URL persisted this variable will make sure to render the result 
    //of that question unless if is false, rendering the question itself
    let showQuestionResponse = true; 
    if (typeof location.state !== "undefined") { 
      showQuestionResponse = location.state.showResponse
    }

    let btnDisabled = true;
    if (value !== null) {
      btnDisabled = false;
    }


    return (
      <Fragment>
        {showQuestionResponse ? (
          <QuestionResultPage id={id} history={this.props.history} />
        ) : (
          <Fragment>
            {showResult ? (
              <QuestionResultPage id={id} history={this.props.history} />
            ) : (
              <Fragment>
                <NavBar history={this.props.history} />
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
                          <Form
                            style={{ width: `100%` }}
                            onSubmit={this.handleSubmit}
                          >
                            <Form.Field style={{ textAlign: `initial` }}>
                              <Radio
                                label={optionOne}
                                name="radioGroup"
                                value="optionOne"
                                onChange={this.handleChange}
                                checked={value === "optionOne"}
                              />
                              <h4 style={{ margin: `10px 0px 10px 0px` }}>
                                or
                              </h4>
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
            )}{" "}
          </Fragment>
        )}
      </Fragment>
    );
  }
}

function mapStateToProps({ questions, users , authUser }, props) {
  const {
    question,
    avatarURL,
    name,
    optionOne,
    optionTwo,
    isIdTrue,
    id
  } = questionPageData(questions, users, props);

  return {
    question,
    avatarURL,
    name,
    optionOne,
    optionTwo,
    isIdTrue,
    id,
    authUser
  };
}

export default connect(mapStateToProps, { handleSaveAnswer })(QuestionPage);
