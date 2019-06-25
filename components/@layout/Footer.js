import React from "react";
import { Container, Segment } from "semantic-ui-react";

const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: "2em 0em" }}>
      <Container>
        Copyright by Bagas Satria Nugroho in {new Date().getFullYear()}
      </Container>
    </Segment>
  );
};

export default Footer;
