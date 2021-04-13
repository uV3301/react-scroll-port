import React from "react";
import { Nav, NavContainer, NavLogo } from "./NavbarElements";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">HOME</NavLogo>
          Hey there
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
