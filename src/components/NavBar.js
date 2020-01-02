import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";

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
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
`;

const Li = styled.li`
  margin-right: 10px;
`;

class NavBar extends Component {
  onLogoutHandler = () => {
    this.props.dispatch(logoutAuth(null));
  };

  render() {
    console.log(this.props);
    return (
      <Nav>
        <div>
          <Ul>
            <Li>Home</Li>
            <Li>New question</Li>
            <Li>Leaderboard</Li>
          </Ul>
        </div>
        <div>
          <Ul>
            <Li>Hello, </Li>
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
