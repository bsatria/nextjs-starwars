import React from "react";
import Link from "next/link";
import { Header, Container, Menu, Segment, Button } from "semantic-ui-react";

const Navbar = () => (
  <Segment
    textAlign="center"
    style={{
      minHeight: 150,
      backgroundColor: "cadetblue",
      marginTop: 45,
      marginBottom: 20
    }}
    vertical
  >
    <Menu fixed="top" size="large">
      <Container>
        <Menu.Item active>
          <Link href="/">
            <a>
              <Button color="green">Home</Button>
            </a>
          </Link>
        </Menu.Item>
      </Container>
    </Menu>
    <Container text>
      <Header
        as="h1"
        content="STARWARS APP"
        inverted
        style={{
          fontSize: "3em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: 30
        }}
      />
    </Container>
  </Segment>
);

export default Navbar;
