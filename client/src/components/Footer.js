import React from 'react';
import { Container, Nav, NavItem } from 'react-bootstrap';
import '../Footer.css';

function Footer(/*props*/) {
  return (
    <footer>
      <Container>
        <Nav justified>
          <NavItem
            eventKey={1}>
            Privacy policy
          </NavItem>
          <NavItem
            eventKey={2}
            title="Item"> 
            Terms & Conditions
          </NavItem>
          <NavItem
            eventKey={3}>
            Some other professional link
          </NavItem>
        </Nav>

        <div className="text-center small copyright">
          © RLM 2016
        </div>
      </Container>
    </footer>
  );
}

export default Footer;