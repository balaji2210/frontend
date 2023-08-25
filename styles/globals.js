import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1rem;
    background-color: ${(props) => props.theme.colors.bg.primary};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button {
    font-family: ${(props) => props.theme.fonts.title};
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  /* stylelint-disable property-no-vendor-prefix, rule-empty-line-before */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export default GlobalStyles;
