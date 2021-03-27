import React, { useContext } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";
import { SearchContext } from "./SearchPage";
import { Button } from "../../theme/globalStyle";

const Input = styled.input`
  width: 90%;
  border-right: 1px solid ${(props) => props.theme.color.primary};
  font-size: ${(props) => props.theme.fontSize.xLarge};
  color: ${(props) => props.theme.color.primary};
  :focus {
    outline: none;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 300px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.color.primary};
  border-radius: 8px;
`;

const SearchBar = () => {
  const { search, query } = useContext(SearchContext);
  const [stateSearch, setStateSearch] = search;
  const [stateQuery, setStateQuery] = query;

  const updateSearch = (e) => {
    setStateSearch(e.target.value);
    console.log(stateSearch);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setStateQuery(stateSearch);
  };

  return (
    <Form onSubmit={getSearch}>
      <Input
        placeholder="Search..."
        type="search"
        value={stateSearch}
        onChange={updateSearch}
      ></Input>
      <Button type="submit">
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
      </Button>
    </Form>
  );
};

export default SearchBar;
