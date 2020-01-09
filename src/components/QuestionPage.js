import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { Button, Form, Radio } from "semantic-ui-react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

import { handleSaveAnswer } from "../actions/questions";
import NavBar from "./NavBar";

/* STYLED COMPONENT */

const CardContainer = styled.div`
  width: 60%;
  margin: auto;
  border: solid #e03997 1px;
  padding: 10px 20px 10px 20px;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 80px;
`;

class QuestionPage extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    const { authUser, id , handleSaveAnswer} = this.props;
    const { value } = this.state;
    handleSaveAnswer(authUser, id, value);
    console.log(`authUSer: ${authUser},id: ${id}, option: ${value} `)
  };

  handleChange = (e, { value }) => {
    this.setState({ value });
  };

  render() {
    const { name, avatarURL, optionOne, optionTwo } = this.props;
    const { value } = this.state;
    console.log(this.props)
    
    let btnDisabled = true; 
    if(value !== undefined ) { btnDisabled = false}
   
    
    return (
      <Fragment>
        <NavBar />
        <CardContainer>
          <Flex css={{ flexBasis: `160px` }}>
            <Avatar src={avatarURL} alt={name} />
            <h4 css={{ margin: `none` }}>{name}</h4>
          </Flex>
          <Flex css={{ alignItems: `baseline`, flexBasis: `300px` }}>
            <h2 css={{ color: `#e61a8d`, fontStyle: `bold` }}>
              Would you rather...{" "}
            </h2>
            <Form css={{ width: `100%` }} onSubmit={this.handleSubmit}>
              <Form.Field css={{ textAlign: `initial` }}>
                <Radio
                  label={optionOne}
                  name="radioGroup"
                  value="optionOne"
                  onChange={this.handleChange}
                  checked={value === "optionOne"}
                />
                <h4 css={{ margin: `10px 0px 10px 0px` }}>or</h4>
                <Radio
                  label={optionTwo}
                  name="radioGroup"
                  value="optionTwo"
                  onChange={this.handleChange}
                  checked={value === "optionTwo"}
                />
              </Form.Field>
              <Button content="Submit" fluid type="submit" disabled={btnDisabled} />
            </Form>
          </Flex>
        </CardContainer>
      </Fragment>
    );
  }
}

function mapStateToProps({ questions, users, authUser }, props) {
  const id = props.match.params.id;
  const question = questions[id];
  const avatarURL = users[question.author].avatarURL;
  const name = users[question.author].name;
  const optionOne = question.optionOne.text;
  const optionTwo = question.optionTwo.text;

  return {
    id,
    question,
    avatarURL,
    name,
    optionOne,
    optionTwo,
    questions,
    authUser
  };
}

export default connect(
  mapStateToProps,
  {handleSaveAnswer}
)(QuestionPage);
