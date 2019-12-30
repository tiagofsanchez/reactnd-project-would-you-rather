import React, { Component } from "react";
import { Button } from "semantic-ui-react";

/** @jsx jsx */
import { jsx } from "@emotion/core";

class NavBar extends Component {
  render() {
    return (
      <nav
        css={{
          width: `80%`,
          textAlign: `center`,
          margin: `auto`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `space-between`
        }}
      >
        <div>
          <ul css={{ listStyle: `none`, display: `flex` }}>
            <li>Home</li>
            <li>New Question</li>
            <li>Leaderboard</li>
          </ul>
        </div>
        <div>
          <ul
            css={{ listStyle: `none`, display: `flex`, alignItems: `center` }}
          >
            <li>Hello, </li>
            <li>
              <Button size="mini" content="Logout" color="pink" />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
