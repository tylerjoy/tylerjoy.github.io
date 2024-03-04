import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
`;

const NavContainer = styled.nav`
  color: #fff;
  padding: 1rem;
  display: inline-flex;
  flex-direction: row-reverse;
  margin-left: auto;
`;

const NavLink = styled(Link)`
  color: #fff;
  margin-right: 1rem;
  text-decoration: none;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <h1>Document Search Site</h1>
      <NavContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
