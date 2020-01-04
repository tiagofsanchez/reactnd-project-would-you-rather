import React from "react";
import { connect } from "react-redux";

import { leaderboardData } from "../utils/helper";
import NavBar from "./NavBar";
import LeaderboardCard from "./LeaderboardCard";

const LeaderboardPage = props => {
  const { leaderboard } = props;
  return (
    <div>
      <NavBar />
      {leaderboard.map(user => {
        return (
          <LeaderboardCard
            key={user.id}
            name={user.name}
            avatarURL={user.avatarURL}
            questionsAnswered={user.questionsAnswered}
            questionsAsked={user.questionsAsked}
            score={user.score}
          />
        );
      })}
    </div>
  );
};

function mapStateToProps({ users }) {
  const leaderboard = leaderboardData(users);
  return {
    leaderboard
  };
}

export default connect(mapStateToProps)(LeaderboardPage);
