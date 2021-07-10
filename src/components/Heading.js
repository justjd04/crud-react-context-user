import React from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
} from "reactstrap";

export const Heading = () => {
  return (
    <Navbar style={{ background: "#99ff66", borderRadius: "10px"}}>
      <Container>
        <NavbarBrand href="/"
        style={{color:'black'}}>Users</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">Add User</Link>
          </NavItem>
        </Nav>

      </Container>
    </Navbar>
  )
}