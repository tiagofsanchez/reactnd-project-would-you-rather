import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

import { logoutAuth } from "../actions/authUser";

/*STYLE components */

const Nav = styled.nav`
  width: 80%;
  text-align: center;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const Ul = styled.ul`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0;
`;

const Li = styled.li`
  margin-right: 10px;
  list-style: none;
  text-decoration: none;
`;

const Span = styled.span`
  background-color: #cccccc;
  padding: 2px;
  border-radius: 2px;
`;

const activeLink = {
  fontWeight: "bold",
  paddingBottom: "5px",
  borderBottom: "3px solid #e03997"
};

class NavBar extends Component {
  onLogoutHandler = () => {
    const { dispatch } = this.props;
    dispatch(logoutAuth(null));
    window.location.href = "/";
  };

  render() {
    const { authUser } = this.props;

    return (
      <Nav>
        <div>
          <Ul>
            <Li>
              <NavLink exact to="/" activeStyle={activeLink}>
                Home
              </NavLink>
            </Li>
            <Li>
              <NavLink exact to="/newquestion" activeStyle={activeLink}>
                New question
              </NavLink>
            </Li>
            <Li>
              <NavLink exact to="/leaderboard" activeStyle={activeLink}>
                Leaderboard
              </NavLink>
            </Li>
          </Ul>
        </div>
        <div>
          <Ul>
            <Li>
              Hello, <Span>{authUser}</Span>
            </Li>
            <Li>
              <Button
                size="mini"
                content="Logout"
                color="pink"
                onClick={this.onLogoutHandler}
              />
            </Li>
          </Ul>
        </div>
      </Nav>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser
  };
}

export default connect(mapStateToProps)(NavBar);
