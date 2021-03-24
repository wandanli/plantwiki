import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { Button } from "../../theme/globalStyle";
import { IconContext } from "react-icons";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const StyledButton = styled(Button)`
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

const StyledIcon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const PageButton = () => {
  return (
    <Fragment>
      <StyledButton right>
        <IconContext.Provider
          value={{
            color: "#FF9000", //how to use theme.color here?
            size: "4rem",
          }}
        >
          <StyledIcon>
            <FaArrowCircleRight />
          </StyledIcon>
        </IconContext.Provider>
      </StyledButton>
      <StyledButton left>
        <IconContext.Provider
          value={{
            color: "#FF9000", //how to use theme.color here?
            size: "4rem",
          }}
        >
          <StyledIcon>
            <FaArrowCircleLeft />
          </StyledIcon>
        </IconContext.Provider>
      </StyledButton>
    </Fragment>
  );
};

export default PageButton;
