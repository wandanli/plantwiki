import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Button, Wrapper, MinWidthBreakpoints } from "../../theme/globalStyle";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const StyledButton = styled(Button)`
  position: fixed;
  top: 50vh;
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  ${(props) =>
    props.right &&
    css`
      right: 10px;
    `};
  ${(props) =>
    props.left &&
    css`
      left: 10px;
    `};

  @media ${MinWidthBreakpoints.xLarge} {
    ${(props) =>
      props.right &&
      css`
        right: calc((100% - 1100px) / 2 - 40px);
      `};
    ${(props) =>
      props.left &&
      css`
        left: calc((100% - 1100px) / 2 - 40px);
      `};
  } ;
`;

const PageButton = ({ handleClick }) => {
  // could not find a good way for hover
  const [iconColorRight, setIconColorRight] = useState("#ffa83f");
  const [iconColorLeft, setIconColorLeft] = useState("#ffa83f");

  const arrowIconRight = {
    fontSize: "4rem",
    color: `${iconColorRight}`,
  };

  const arrowIconLeft = {
    fontSize: "4rem",
    color: `${iconColorLeft}`,
  };

  return (
    <Wrapper>
      <StyledButton
        right
        onMouseEnter={() => setIconColorRight("#FF9000")}
        onMouseLeave={() => setIconColorRight("#ffa83f")}
        onClick={() => handleClick("right")}
      >
        <FaArrowCircleRight style={arrowIconRight} />
      </StyledButton>

      <StyledButton
        left
        onMouseEnter={() => setIconColorLeft("#FF9000")}
        onMouseLeave={() => setIconColorLeft("#ffa83f")}
        onClick={() => handleClick("left")}
      >
        <FaArrowCircleLeft style={arrowIconLeft} />
      </StyledButton>
    </Wrapper>
  );
};

export default PageButton;
