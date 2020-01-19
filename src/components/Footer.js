import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

import LoginUserAvatar from "./LoginUserAvatar";

const FooterDiv = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 10px;
  background: white;
  
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;
const UserLogOut = styled.div`
  display: none;
  @media (max-width: 650px) {
    display: block;
  }
`;

const Footer = () => {
  return (
    <FooterDiv>
      <Container>
        <UserLogOut>
          <LoginUserAvatar />
        </UserLogOut>
        <p css={{ textAlign: `center`, alignSelf: `center` }}>Made by Tiago</p>
      </Container>
    </FooterDiv>
  );
};

export default Footer;
