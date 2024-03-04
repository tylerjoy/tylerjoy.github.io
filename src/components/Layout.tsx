import React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";

//FIXME: Calculate main height, currently estimated
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
  },  main {
    display: flex;
    height: calc( 100vh - 195px );
  }, .mainSection {
    display: flex;
    flex: 1 0 auto;
    align-items: center;
    flex-direction: column;
  }

`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
