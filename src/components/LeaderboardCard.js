import React from "react";
import { connect } from "react-redux";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

/* STYLED COMPONENT */

const CardContainer = styled.div`
  width: 80%;
  margin: auto;
  border: solid #e03997 1px;
  padding: 10px;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 10px;
  display: flex; 
  align-items: center;

`;

const Flex = styled.div`
  display: flex;
`;

const Avatar = styled.img`
  height: 115px;
  padding: 8px;
`;

const LeaderboardCard = props => {
  const { user } = props;
  console.log(props);
  return (
    <CardContainer>
      <Flex>
        <h2>{user.name}</h2>
        <Avatar src={user.avatarURL} alt={user.name} />
      </Flex>
      <div>
        <p>Something here</p>
      </div>
      <div>
          <p>Something here</p>
      </div>
    </CardContainer>
  );
};

function mapStateToProps({ users }, { userId }) {
  const user = users[userId];
  return {
    user
  };
}

export default connect(mapStateToProps)(LeaderboardCard);
