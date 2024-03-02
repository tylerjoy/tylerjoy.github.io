import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

//parent container with flex property to allow left placement of search field, and right placement of nav elements.
const NavContainerParent = styled.nav`
  background-color: #444;
  color: #fff;
  padding: 1rem;
  display: flex;
`;

const SearchContainer = styled.nav`
  background-color: #444;
  color: #fff;
  padding: 1rem;
  display: inline-flex;
`;

const NavContainer = styled.nav`
  background-color: #444;
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

const SearchLink = styled(Link)`
  color: #fff;
  margin-right: 1rem;
  text-decoration: none;
`;

const SearchInput = styled.input`
  type: text;
  placeholder: "Search documents";
`;

const Navbar: React.FC = () => {
  return (
    <NavContainerParent>
      <SearchContainer>
        {/* <SearchLink to="/search">Search</SearchLink> */}
        <SearchInput></SearchInput>
      </SearchContainer>
      <NavContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavContainer>
    </NavContainerParent>
  );
};

export default Navbar;
