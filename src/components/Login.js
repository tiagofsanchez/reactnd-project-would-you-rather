import React from "react";
import { connect } from "react-redux";
import { Dropdown, Button, Form } from "semantic-ui-react";
/** @jsx jsx */
import { jsx } from "@emotion/core";

import { userOptions } from "../utils/helper";
import { receivedAuth } from "../actions/authUser";

class Login extends React.Component {
  state = {
    userId: ""
  };

  handleUserChange = (e, data) => {
    const { value } = data;
    this.setState({
      userId: value
    });
  };

  onSubmitHandler = e => {
    const { dispatch } = this.props;
    const { userId } = this.state;
    dispatch(receivedAuth(userId));
    this.setState({ userId: "" });
  };

  render() {
    const { userId } = this.state;
    const { userOptions } = this.props;

    console.log(this.state);

    let btnDisable = true;
    if (userId !== "") {
      btnDisable = false;
    }

    let isLoading = true;
    if (userOptions.length > 0) {
      isLoading = false;
    }

    return (
      <div
        textAlign="center"
        css={{ width: `80%`, margin: `auto`, textAlign: `center` }}
      >
        <h1>Welcome to WOULD YOU RATHER app</h1>
        <Form onSubmit={this.onSubmitHandler}>
          <Dropdown
            placeholder="Select your user"
            clearable
            fluid
            selection
            options={userOptions}
            loading={isLoading}
            onChange={this.handleUserChange}
          />
          <Button fluid content="ENTER" disabled={btnDisable} type="submit" />
        </Form>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    userOptions: userOptions(users)
  };
}

export default connect(mapStateToProps)(Login);
