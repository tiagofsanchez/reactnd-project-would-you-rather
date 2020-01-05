import React from "react";
import { connect } from "react-redux";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

const CardContainer = styled.div`
  margin: auto;
  border: solid #e03997 1px;
  padding: 10px 20px 10px 20px;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 80px;
`;

const QuestionCard = props => {
  const { id, name, avatarURL } = props;
  console.log(props);
  return (
    <CardContainer>
      <Flex>
        <Avatar src={avatarURL} alt={name} />
        <h4 css={{ margin: `none` }}>{name}</h4>
      </Flex>
      {`my question card with the id: ${id}`}
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
    question
  };
}

export default connect(mapStateToProps)(QuestionCard);
