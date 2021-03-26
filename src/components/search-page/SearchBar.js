import React, { useContext } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";
import { SearchContext } from "./SearchPage";

// const SearchBarWrapper = styled(Wrapper)`
//   width: 90%;
//   max-width: 300px;
//   margin: 0 auto;
//   padding: 10px;
//   border: 1px solid ${(props) => props.theme.color.primary};
//   border-radius: 8px;
// `;

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
  const [search, setSearch] = useContext(SearchContext);
  const [query, setQuery] = useContext(SearchContext);
  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <Form onSubmit={getSearch}>
      <Input
        placeholder="Search..."
        type="search"
        value={search}
        onChange={updateSearch}
      ></Input>
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
    </Form>
  );
};

export default SearchBar;
