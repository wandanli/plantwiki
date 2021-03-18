import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html {
    font-size: 62.5%; /* 16px * 62.5% = 10px -> 1rem = 10px */
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 0;
}

body {
  font-family: ${(props) => props.theme.fontFamily.paragraph};
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  line-height: 1.3;
  color: ${(props) => props.theme.color.black};
}
`;

export default GlobalStyle;
