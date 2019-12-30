import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div>
          <ul>
            <li>Home</li>
            <li>New Question</li>
            <li>Leaderboard</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Hello, </li>
            <li>
              <Button content="Logout" />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
