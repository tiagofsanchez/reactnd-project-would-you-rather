import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

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
  flex-direction: column-reverse;
`;

const Avatar = styled.img`
  height: 80px;
  padding: 8px;
`;

const Score = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #e03997;
  color: white;
  font-size: xx-large;
`;

const LeaderboardCard = props => {
  const { name, avatarURL, questionsAnswered, questionsAsked, score } = props;
  console.log(props);
  return (
    <CardContainer>
      <Flex>
        <h4>{name}</h4>
        <Avatar src={avatarURL} alt={name} />
      </Flex>
      <Flex css={{ fontSize: `large` }}>
        <p>{`Questions asked: ${questionsAsked}`}</p>
        <hr />
        <p>{`Questions answered: ${questionsAnswered}`}</p>
      </Flex>
      <Score>
        <p>{score}</p>
      </Score>
    </CardContainer>
  );
};

export default LeaderboardCard;
