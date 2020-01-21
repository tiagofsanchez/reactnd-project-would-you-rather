import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import { Button } from "semantic-ui-react";

import { receivedAuth } from "../actions/authUser";

const Ul = styled.ul`
  text-decoration: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  margin-right: 10px;
  list-style: none;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  height: 20px;
  margin: 5px;
`;

class LoginUserAvatar extends Component {
  onLogoutHandler = (e, history) => {
    e.preventDefault();
    const { dispatch } = this.props;
    console.log(history.location);
    dispatch(receivedAuth(null));
  };

  render() {
    const { name, avatarURL } = this.props;
    console.log(this.props)
    return (
      <Ul>
        <Li>
          Hello, <Avatar alt={name} src={avatarURL} /> {name}
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
    );
  }
}

function mapStateToProps({ authUser, users }) {

  return {
    name: users[authUser].name,
    avatarURL: users[authUser].avatarURL,
  };
}

export default connect(mapStateToProps)(LoginUserAvatar);
