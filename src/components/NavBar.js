import React, { Component } from "react";
import { NavLink } from "react-router-dom";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

import LoginUserAvatar from "./LoginUserAvatar";

/*STYLE components */
const Header = styled.div`
width: 100%;
position:fixed; 
top: 0;
background: white;
`

const Nav = styled.nav`
  width: 80%;
  text-align: center;
  margin: auto;
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: space-between;
`;

const Ul = styled.ul`
  text-decoration: none;
  display: flex;
  align-items: baseline;
  margin: 10px;
  margin: none;
`;

const Li = styled.li`
  margin-right: 10px;
  list-style: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: black;
`;

const UserLogout = styled.div`
  @media (max-width: 650px) {
    display: none;
  }
`;
/*STYLE components */

const activeLink = {
  fontWeight: "bold",
  paddingBottom: "5px",
  borderBottom: "3px solid #e03997"
};

class NavBar extends Component {
  render() {
    return (
      <Header>
      <Nav>
       
          <Ul>
            <Li>
              <NavLink
                exact
                to="/"
                activeStyle={activeLink}
                css={{ color: `black` }}
              >
                Home
              </NavLink>
            </Li>
            <Li>
              <NavLink
                exact
                to="/add"
                activeStyle={activeLink}
                css={{ color: `black` }}
              >
                New question
              </NavLink>
            </Li>
            <Li>
              <NavLink
                exact
                to="/leaderboard"
                activeStyle={activeLink}
                css={{ color: `black` }}
              >
                Leaderboard
              </NavLink>
            </Li>
          </Ul>
      
        <UserLogout>
          <LoginUserAvatar />
        </UserLogout>
      </Nav>
      </Header>
    );
  }
}

export default NavBar;
