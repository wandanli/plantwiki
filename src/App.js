import React from "react";
import styled from "styled-components";
import GlobalStyle from "./theme/globalStyle";
import Theme from "./theme/theme";

const Heading = styled.h1`
  color: ${(props) => props.theme.color.primary};
`;

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Heading>Hello React</Heading>
      <div>Paragraph</div>
    </Theme>
  );
}

export default App;
