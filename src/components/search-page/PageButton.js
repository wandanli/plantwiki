import React, { useState, Fragment } from "react";
import styled, { css } from "styled-components";
import { Button } from "../../theme/globalStyle";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const StyledButton = styled(Button)`
  position: fixed;
  top: 50%;
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
  ${(props) =>
    props.right &&
    css`
      right: 40px;
    `};
  ${(props) =>
    props.left &&
    css`
      left: 40px;
    `};
  &:focus,
  &:active {
    outline: none;
  }
`;

const PageButton = () => {
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
    <Fragment>
      <StyledButton
        right
        onMouseEnter={() => setIconColorRight("#FF9000")}
        onMouseLeave={() => setIconColorRight("#ffa83f")}
      >
        <FaArrowCircleRight style={arrowIconRight} />
      </StyledButton>
      <StyledButton
        left
        onMouseEnter={() => setIconColorLeft("#FF9000")}
        onMouseLeave={() => setIconColorLeft("#ffa83f")}
      >
        <FaArrowCircleLeft style={arrowIconLeft} />
      </StyledButton>
    </Fragment>
  );
};

export default PageButton;
