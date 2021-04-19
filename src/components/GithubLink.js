import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled.a`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 4rem;
  color: ${(props) => props.theme.color.black};
`;

const GithubLink = () => {
  return (
    <StyledLink target="_blank" href="https://github.com/wandanli/plantwiki">
      <FaGithub />
    </StyledLink>
  );
};

export default GithubLink;
