import React, { Fragment } from "react";
import { connect } from "react-redux";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

import NavBar from "./NavBar";

/* STYLED COMPONENT */

const CardContainer = styled.div`
  width: 80%;
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
`;

const Avatar = styled.img`
  height: 80px;
  padding: 8px;
`;

const QuestionPage = props => {
  const { name, avatarURL } = props;
  return (
    <Fragment>
      <NavBar />
      <CardContainer>
        <Flex>
          <Avatar src={avatarURL} alt={name} />
          <h4>{name}</h4>
        </Flex>
      </CardContainer>
    </Fragment>
  );
};

function mapStateToProps({ questions, users }, props) {
  const id = props.match.params.id;
  const question = questions[id];
  const avatarURL = users[question.author].avatarURL;
  const name = users[question.author].name;

  return {
    id,
    question,
    avatarURL,
    name
  };
}

export default connect(mapStateToProps)(QuestionPage);
