import React, { Fragment } from "react";
import styled from "styled-components";
import { Heading, Paragraph, Wrapper } from "../../theme/globalStyle";

const StyledHeading = styled(Heading)`
  color: ${(props) => props.theme.color.secondary};
`;

const StyledParagraph = styled(Paragraph)`
  display: flex;
  margin: 20px;
`;

const StyledKey = styled(Paragraph)`
  padding: 10px;
  background-color: ${(props) => props.theme.color.greyLight};
  border: 1px solid ${(props) => props.theme.color.greyDark};
  border-radius: 8px 0 0 8px;
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  text-transform: capitalize;
`;

const StyledValue = styled(StyledKey)`
  background-color: ${(props) => props.theme.color.greyDark};
  border-radius: 0 8px 8px 0;
  color: ${(props) => props.theme.color.white};
`;

const Specifications = ({ specs }) => {
  return (
    <Wrapper margin="40px 0" flexDirection="column">
      <StyledHeading h1 margin="20px">
        Specifications
      </StyledHeading>
      <Wrapper>
        {Object.entries(specs).map(([key, value]) => {
          if (key !== "average_height" && key !== "maximum_height") {
            return (
              <StyledParagraph>
                <StyledKey>{key.split("_").join(" ")}: </StyledKey>
                <StyledValue>{value === null ? "Null" : value}</StyledValue>
              </StyledParagraph>
            );
          } else {
            return null;
          }
        })}
      </Wrapper>
    </Wrapper>
  );
};

export default Specifications;
