import React from "react";
import styled from "styled-components";
import { Heading, Paragraph, Wrapper } from "../../theme/globalStyle";
import { VscTriangleDown } from "react-icons/vsc";

const StyledWrapper = styled(Wrapper)`
  flex: 0 0 180px;
  height: 160px;
  border: 1px solid ${(props) => props.theme.color.primary};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;

const StyledHeading = styled(Heading)`
  width: 100%;
  height: 48px;
  padding: 14px;
  background-color: ${(props) => props.theme.color.primary};
  border: 1px solid ${(props) => props.theme.color.primary};
  border-radius: 6px 6px 0 0;
  text-align: center;
  color: ${(props) => props.theme.color.white};
`;

const StyledParagraph = styled(Paragraph)`
  padding: 0 10px 14px 10px;
  text-transform: capitalize;
`;

const StyledVscTriangleDown = styled(VscTriangleDown)`
  position: relative;
  top: -9px;
  color: ${(props) => props.theme.color.primary};
  font-size: 3rem;
`;

const TextCard = ({ plantField, title }) => {
  return (
    <StyledWrapper margin="20px" flexDirection="column" flexJC="flex-start">
      <StyledHeading h4>{title}</StyledHeading>
      <StyledVscTriangleDown />
      <StyledParagraph> {plantField} </StyledParagraph>
    </StyledWrapper>
  );
};

export default TextCard;
