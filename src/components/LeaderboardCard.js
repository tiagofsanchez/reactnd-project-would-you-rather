import React from "react";
import styled from "@emotion/styled";

/* STYLED COMPONENT */

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
  justify-content: space-between;
  flex-wrap: wrap-reverse;

`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  height: 80px;
`;

const Score = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #e03997;
  color: white;
  font-size: xx-large;
  align
`;

//Styling for what the rsult of the user that is Authed
const userAuthStyle = { backgroundColor: `lavenderblush` };

const LeaderboardCard = props => {
  const {
    name,
    avatarURL,
    questionsAnswered,
    questionsAsked,
    score,
    authUser,
    id
  } = props;
  let shadeUser = null;
  if (authUser === id) {
    shadeUser = userAuthStyle;
  }

  return (
    <CardContainer style={shadeUser}>
      <Flex style={{ flex: `4 1 360px`, flexWrap: `wrap` }}>
        <FlexColumn
          style={{
            flex: `1 1 160px`,
            marginTop: `20px`,
            marginBottom: `20px`,
          }}
        >
          <Avatar src={avatarURL} alt={name} />
          <h4>{name}</h4>
        </FlexColumn>
        <FlexColumn
          style={{
            fontSize: `large`,
            flex: `4 1 200px`,
            alignItems: `flex-start`
          }}
        >
          <p>{`Questions asked: ${questionsAsked}`}</p>
          <p>{`Questions answered: ${questionsAnswered}`}</p>
        </FlexColumn>
      </Flex>
      <Flex style={{ flex: `0 0 50px ` }}>
        <Score>
          <p>{score}</p>
        </Score>
      </Flex>
    </CardContainer>
  );
};

export default LeaderboardCard;
