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

const Specifications = ({ specs }) => {
  return (
    <Wrapper margin="40px 0" flexDirection="column">
      <StyledHeading h1 margin="20px">
        <Emoji aria-label="Sparkles"> ✨ </Emoji> Specifications{" "}
        <Emoji aria-label="Sparkles"> ✨ </Emoji>
      </StyledHeading>
      <Wrapper>
        {Object.entries(specs).map(([key, value]) => {
          let myValue = "";
          if (key === "average_height" || key === "maximum_height") {
            myValue = key.cm;
          } else {
            myValue = value;
          }
          if (typeof myValue === "undefined" || myValue === null) {
            myValue = "null";
          }

          return (
            <StyledParagraph>
              <StyledKey>{key.split("_").join(" ")}: </StyledKey>
              <StyledValue>{myValue}</StyledValue>
            </StyledParagraph>
          );
        })}
      </Wrapper>
    </Wrapper>
  );
};

export default Specifications;
