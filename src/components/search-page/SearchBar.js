import React from "react";
import styled from "styled-components";
import { Wrapper } from "../../theme/globalStyle";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";

const SearchBarWrapper = styled(Wrapper)`
  width: 90%;
  max-width: 300px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.color.primary};
  border-radius: 8px;
`;

const Input = styled.input`
  font-size: ${(props) => props.theme.fontSize.xLarge};
  color: ${(props) => props.theme.color.primary};
  :focus {
    outline: none;
  }
`;

const SearchBar = () => {
  return (
    <SearchBarWrapper flexJC="space-between">
      <Input placeholder="Search..."></Input>
      <IconContext.Provider
        value={
          {
            color: "#06B49A", //how to use theme.color here?
            size: "2rem",
          }
          // (props) => ({
          //   color: props.theme.color.primary,
          //   size: "2rem",
          // })
        }
      >
        <div>
          <FaSearch />
        </div>
      </IconContext.Provider>
    </SearchBarWrapper>
  );
};

export default SearchBar;
