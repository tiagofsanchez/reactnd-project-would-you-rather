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
`;

//TODO: check why is avatar different from the Leaderboard
const Avatar = styled.img`
  height: 80px;
  margin-right: 20px;
`;

const Option = styled.img`
  height: 20px;
  margin: 10px;
`;

const optionOne = "https://image.flaticon.com/icons/svg/752/752665.svg";
const optionTwo = "https://image.flaticon.com/icons/svg/752/752665.svg";

class QuestionResultsPage extends Component {
  
  handleClick =()=> { 
    const { history } = this.props
    history.goBack()
  } 

  render() {
    const { avatarURL, name } = this.props;
    console.log(this.props);
    return (
      <div>
        <NavBar />
        <CardContainer>
          <FlexColumn>
            <Avatar src={avatarURL} alt={name} />
            <h3>{name}</h3>
          </FlexColumn>
          <FlexColumn css={{ width: `100%` }}>
            <Flex>
              <Option src={optionTwo} />
              <Progress />
            </Flex>
            <Flex>
              <Option src={optionTwo} />
              <Progress />
            </Flex>
          </FlexColumn>
        </CardContainer>
        <BtnContainer>
          <Button content="Back" color='pink' basic onClick={this.handleClick}/>
        </BtnContainer>
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authUser }, props) {
  const id = props.match.params.id;
  const name = users[questions[id].author].name;
  const avatarURL = users[questions[id].author].avatarURL;
  const optionOneVotes = questions[id].optionOne.votes.length;
  const optionTwoVotes = questions[id].optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;

  return {
    name,
    avatarURL,
    optionOneVotes,
    optionTwoVotes,
    totalVotes
  };
}

export default connect(mapStateToProps)(QuestionResultsPage);
