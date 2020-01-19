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
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const BtnContainer = styled.div`
  margin: auto;
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 8px 5px 8px;
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
  flex-basis: 10%;
`;

const H4 = styled.h4`
  margin: 0px 10px 0px 0px;
  flex-basis: 30%;
`;

//Styling for what the user selects
const userAnswerStyle = { backgroundColor: `lavenderblush` };

const optionOneLogo = "https://image.flaticon.com/icons/svg/73/73207.svg";
const optionTwoLogo = "https://image.flaticon.com/icons/svg/91/91617.svg";

class QuestionResultsPage extends Component {
  handleClick = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const {
      avatarURL,
      name,
      optionOne,
      optionTwo,
      userAnswer,
      optionOneVotes,
      optionTwoVotes,
      totalVotes,
      logedInUser
    } = this.props;

    //checking what is the loged user to display her option
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
          <FlexColumn
            css={{
              backgroundColor: `#f9f9f9`,
              padding: `25px`,
              borderRadius: `5px`,
              flex: `1 1 160px`
            }}
          >
            <Avatar src={avatarURL} alt={name} />
            <h3 css={{ marginTop: `10px` }}>{name}</h3>
          </FlexColumn>
          <FlexColumn css={{ flex: `4 1 200px` }}>
            <Flex css={optionOneStyle}>
              <Option src={optionOneLogo} />
              <H4>{optionOne}</H4>
              <Progress
                percent={Math.round(optionOneVotes/totalVotes *100)}
                progress="percent"
                css={{ flexBasis: `60%` }}
              >{`${optionOneVotes} out of ${totalVotes}`}</Progress>
            </Flex>
            <Flex css={optionTwoStyle}>
              <Option src={optionTwoLogo} />
              <H4>{optionTwo}</H4>
              <Progress
                progress='percent'
                percent={Math.round(optionTwoVotes/totalVotes *100)}
                css={{ flexBasis: `60%` }}
              >{`${optionTwoVotes} out of ${totalVotes}`}</Progress>
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
          <div
            css={{ backgroundColor: `lavenderblush`, padding: `10px` }}
          >{`${logedInUser} selection`}</div>
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
  const logedInUser = users[authUser].name;

  return {
    name,
    avatarURL,
    optionOne,
    optionTwo,
    optionOneVotes,
    optionTwoVotes,
    totalVotes,
    userAnswer,
    logedInUser
  };
}

export default connect(mapStateToProps)(QuestionResultsPage);
