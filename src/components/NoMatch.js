import React, { Fragment } from "react";
import NavBar from "./NavBar";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

const NoMatchContainer = styled.div`
  margin: auto;
  width: 70%;
text-align: center;
`;

const NoMatch = () => {
  return (
    <Fragment>
      <NavBar />
      <NoMatchContainer>
        <img src="https://image.flaticon.com/icons/svg/643/643717.svg" alt="error" css={{height: `100px`}} /> 
        <h1>ERROR PAGE</h1>
        <p>Please go back to any other page.</p>
      </NoMatchContainer>
    </Fragment>
  );
};

export default NoMatch;
