import React from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

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
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

//TODO: check why is avatar different from the Leaderboard
const Avatar = styled.img`
  height: 80px;
`;

const QuestionCard = props => {
  const { name, avatarURL, questionTeaser, toBeAnswered, id } = props;
  //   console.log(props);

  const button = toBeAnswered ? (
    <Link to={`/question/${id}`} css={{ width: `100%` }}>
      <Button floated='right' basic color='pink' >
        Answer
      </Button>
    </Link>
  ) : (
    <Link to={`/question-result/${id}`} css={{ width: `100%` }}>
      <Button floated='right' basic color='pink'>
        Check results
      </Button>
    </Link>
  );

  return (
    <CardContainer>
      <Flex css={{flexBasis: `160px`}}>
        <Avatar src={avatarURL} alt={name} />
        <h4 css={{ margin: `none` }}>{name}</h4>
      </Flex>
      <Flex css={{ alignItems: `baseline`, flex: `2 1 0`, marginLeft: `20px` }}>
        <h2 css={{ color: `#e61a8d`, fontStyle: `bold` }}>
          Would you rather...{" "}
        </h2>
        <p css={{ margin: `0px` }}>{questionTeaser}</p>
        <h4 css={{ margin: `0px` }}>or</h4>
        <p css={{ margin: `0px` }}>...</p>
        <br />
        {button}
      </Flex>
    </CardContainer>
  );
};

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id];
  const avatarURL = users[question.author].avatarURL;
  const name = users[question.author].name;

  return {
    avatarURL,
    name,
    questionTeaser: question.optionOne.text
  };
}

export default connect(mapStateToProps)(QuestionCard);
