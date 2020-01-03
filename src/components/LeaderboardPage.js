import React from "react";
import {connect } from "react-redux"


import NavBar from "./NavBar";
import LeaderboardCard from './LeaderboardCard';


const LeaderboardPage = (props) => {
  
  
  const { users } = props
  

  return (
    <div>
      <NavBar />
      {Object.keys(users).map(user=> { 
        return <LeaderboardCard userId={users[user].id} key={users[user].id} />
      })}
    </div>
  );
};

function mapStateToProps({users}) { 
  return { 
    users
  }
}


export default connect(mapStateToProps)(LeaderboardPage)
