import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { Button } from "../../theme/globalStyle";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const StyledButton = styled(Button)`
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: fixed;
  top: 50%;
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

const arrowIcon = {
  fontSize: "4rem",
  color: "#FF9000",
};

const PageButton = () => {
  return (
    <Fragment>
      <StyledButton right>
        <FaArrowCircleRight
          style={arrowIcon}
          onMouseOut={({ target }) => (target.style.color = "#ffaa42")}
          onMouseOver={({ target }) => (target.style.color = "#FF9000")}
        />
      </StyledButton>
      <StyledButton left>
        <FaArrowCircleLeft
          style={arrowIcon}
          onMouseOut={({ target }) => (target.style.color = "#ffaa42")}
          onMouseOver={({ target }) => (target.style.color = "#FF9000")}
        />
      </StyledButton>
    </Fragment>
  );
};

export default PageButton;
