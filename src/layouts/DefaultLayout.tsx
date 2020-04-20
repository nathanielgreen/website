import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  width: 100vw;
  height: 100vh;
}
body {
  background-color: #f1f1f1;
  width: 100vw;
  height: 100vh;
  margin: 0;
}
#gatsby-focus-wrapper {
  height: 100vh;
  font-family: Arial, sans-serif;
}
`;
export default ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    {children}
  </React.Fragment>
);
