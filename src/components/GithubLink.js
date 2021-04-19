import React from "react";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";
import { MaxWidthBreakpoints } from "../theme/globalStyle";

const StyledLink = styled.a`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 4rem;
  color: ${(props) => props.theme.color.black};
  @media ${MaxWidthBreakpoints.small} {
    top: 10px;
    right: 10px;
    font-size: 2.6rem;
  } ;
`;

const GithubLink = () => {
  return (
    <StyledLink target="_blank" href="https://github.com/wandanli/plantwiki">
      <FaGithub />
    </StyledLink>
  );
};

export default GithubLink;
