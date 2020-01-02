import React, { Component } from "react";
import { Button } from "semantic-ui-react";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

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
  render() {
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
              <Button size="mini" content="Logout" color="pink" />
            </Li>
          </Ul>
        </div>
      </Nav>
    );
  }
}

export default NavBar;
