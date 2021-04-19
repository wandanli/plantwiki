import React, { useContext } from "react";
import styled from "styled-components";
import { SearchContext } from "./SearchPage";
import { Wrapper, MaxWidthBreakpoints } from "../../theme/globalStyle";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";

const StyledWrapper = styled(Wrapper)`
  align-items: flex-end;
  width: 90%;
  max-width: 300px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.color.primary};
  border-radius: 8px;
`;

const Input = styled.input`
  display: block;
  width: 90%;
  padding-left: 10px;
  font-size: ${(props) => props.theme.fontSize.xLarge};
  color: ${(props) => props.theme.color.primary};
  :focus {
    outline: none;
  }
  @media ${MaxWidthBreakpoints.small} {
    width: 80%;
  } ;
`;

const SearchBar = () => {
  const [search, setSearch] = useContext(SearchContext);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <StyledWrapper>
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
        <FaSearch />
      </IconContext.Provider>
      <Input
        placeholder="search..."
        type="search"
        value={search}
        onChange={updateSearch}
      ></Input>
    </StyledWrapper>
  );
};

export default SearchBar;
