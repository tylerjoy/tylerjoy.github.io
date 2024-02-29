import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NavContainer = styled.nav`
  background-color: #444;
  color: #fff;
  padding: 1rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  margin-right: 1rem;
  text-decoration: none;
`;

const Navbar: React.FC = () => {
  return (
    <NavContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </NavContainer>
  );
};

export default Navbar;
