import React, { Component } from "react";
import { connect } from "react-redux";
import { Progress, Button } from "semantic-ui-react";

import NavBar from "./NavBar";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

const CardContainer = styled.div`
  margin: auto;
  width: 70%;
  border: solid #e03997 1px;
  padding: 10px 20px 10px 20px;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BtnContainer = styled.div`
  margin: auto;
  width: 70%;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  padding: 5px; 
  margin: 10px; 
  border-radius: 4px; 
`;

//TODO: check why is avatar different from the Leaderboard
const Avatar = styled.img`
  height: 80px;
`;

const Option = styled.img`
  height: 20px;
  margin-right: 10px;
`;

const H4 = styled.h4`
  margin: 0px 10px 0px 0px;
`;

//Styling for what the user selects
const userAnswerStyle = { backgroundColor: `lavenderblush` };

const optionOneLogo = "https://image.flaticon.com/icons/svg/752/752665.svg";
const optionTwoLogo = "https://image.flaticon.com/icons/svg/752/752665.svg";

class QuestionResultsPage extends Component {
  handleClick = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { avatarURL, name, optionOne, optionTwo, userAnswer } = this.props;
    console.log(this.props);

    //checking what is the logedin user choice 
    let optionOneStyle = null;
    let optionTwoStyle = null;
    if (userAnswer === "optionOne") {
      optionOneStyle = userAnswerStyle;
      optionTwoStyle = null;
    } else {
      optionOneStyle = null;
      optionTwoStyle = userAnswerStyle;
    }

    return (
      <div>
        <NavBar />
        <CardContainer>
          <FlexColumn css={{ marginRight: `20px`, padding: `15px` }}>
            <Avatar src={avatarURL} alt={name} />
            <h3 css={{ marginTop: `10px` }}>{name}</h3>
          </FlexColumn>
          <FlexColumn css={{ width: `100% ` }}>
            <Flex css={optionOneStyle} >
              <Option src={optionOneLogo}/>
              <H4>{optionOne}</H4>
              <Progress />
            </Flex>
            <Flex css={optionTwoStyle} >
              <Option src={optionTwoLogo}/>
              <H4>{optionTwo}</H4>
              <Progress />
            </Flex>
          </FlexColumn>
        </CardContainer>
        <BtnContainer>
          <Button
            content="Back"
            color="pink"
            basic
            onClick={this.handleClick}
          />
        </BtnContainer>
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authUser }, props) {
  const id = props.match.params.id;
  const name = users[questions[id].author].name;
  const avatarURL = users[questions[id].author].avatarURL;
  const optionOne = questions[id].optionOne.text;
  const optionTwo = questions[id].optionTwo.text;
  const optionOneVotes = questions[id].optionOne.votes.length;
  const optionTwoVotes = questions[id].optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;
  const userAnswer = users[authUser].answers[id];

  return {
    name,
    avatarURL,
    optionOne,
    optionTwo,
    optionOneVotes,
    optionTwoVotes,
    totalVotes,
    userAnswer
  };
}

export default connect(mapStateToProps)(QuestionResultsPage);
