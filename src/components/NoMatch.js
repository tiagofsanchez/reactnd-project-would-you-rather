import React, { Fragment } from "react";
import NavBar from "./NavBar";

import styled from "@emotion/styled";

const NoMatchContainer = styled.div`
  margin: auto;
  width: 70%;
text-align: center;
margin-top: 170px;
`;

const NoMatch = () => {
  return (
    <Fragment>
      <NavBar />
      <NoMatchContainer>
        <img src="https://image.flaticon.com/icons/svg/643/643717.svg" alt="error" style={{height: `100px`}} /> 
        <h1>ERROR PAGE</h1>
        <p>Please go back to any other page.</p>
      </NoMatchContainer>
    </Fragment>
  );
};

export default NoMatch;
