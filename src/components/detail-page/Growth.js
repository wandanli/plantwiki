import React from "react";
import styled from "styled-components";
import {
  Heading,
  Paragraph,
  Wrapper,
  StyledKey,
  StyledValue,
  Emoji,
} from "../../theme/globalStyle";

const StyledHeading = styled(Heading)`
  color: ${(props) => props.theme.color.secondary};
`;

const StyledParagraph = styled(Paragraph)`
  display: flex;
  margin: 20px;
`;

const Growth = ({ growth }) => {
  return (
    <Wrapper margin="40px 0" flexDirection="column">
      <StyledHeading h1 margin="20px">
        <Emoji aria-label="Sparkles"> ✨ </Emoji>Growth{" "}
        <Emoji aria-label="Sparkles"> ✨ </Emoji>
      </StyledHeading>
      <Wrapper>
        {Object.entries(growth).map(([key, value]) => {
          const regex = /[\{\}\[\]\"\"]/g;
          let growthValue = JSON.stringify(value)
            .replace(regex, "")
            .replace(/,/g, ", ")
            .replace(/:/g, ": ");
          return (
            <StyledParagraph>
              <StyledKey>{key.split("_").join(" ")}: </StyledKey>
              <StyledValue>{growthValue}</StyledValue>
            </StyledParagraph>
          );
        })}
      </Wrapper>
    </Wrapper>
  );
};

export default Growth;
