import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";

import { leaderboardData } from "../utils/helper";
import NavBar from "./NavBar";
import LeaderboardCard from "./LeaderboardCard";

const Container = styled.div`
  padding-top: 120px;
  padding-bottom: 40px;
`;

const LeaderboardPage = props => {
  window.scrollTo(0, 0);
  const { leaderboard, authUser } = props;
  return (
    <div>
      <NavBar history={props.history} />
      <Container>
        {leaderboard.map(user => {
          return (
            <LeaderboardCard
              key={user.id}
              id={user.id}
              name={user.name}
              avatarURL={user.avatarURL}
              questionsAnswered={user.questionsAnswered}
              questionsAsked={user.questionsAsked}
              score={user.score}
              authUser={authUser}
            />
          );
        })}
      </Container>
    </div>
  );
};

function mapStateToProps({ users, authUser }) {
  const leaderboard = leaderboardData(users);
  return {
    leaderboard,
    authUser
  };
}

export default connect(mapStateToProps)(LeaderboardPage);
