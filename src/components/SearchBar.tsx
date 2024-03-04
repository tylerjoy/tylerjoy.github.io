import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Search from "./Search";

const SearchField = styled(Search)`
  color: #fff;
  margin-right: 1rem;
  text-decoration: none;
`;

const NavContainerParent = styled.div`
  display: flex;
  flex-direction: unset;
  justify-content: start;
  align-items: unset;
  margin-right: auto;
`;

const Sidebar = styled.nav`
  width: 250px; /* Adjust the width as needed */
  background-color: #aaa;
  color: #fff;
  padding: 1rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  margin-right: 1rem;
  text-decoration: none;
`;

const SearchInput = styled(Search)`
  color: #fff;
  margin-right: 1rem;
`;

const SearchBar: React.FC = () => {
  return (
    <Sidebar>
      <SearchField />
      {/* Sidebar links go here */}
    </Sidebar>
  );
};

export default SearchBar;
