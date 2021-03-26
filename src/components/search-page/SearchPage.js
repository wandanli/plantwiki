import React, { createContext, useState } from "react";
import {
  Container,
  Heading,
  Wrapper,
  Emoji,
  Paragraph,
} from "../../theme/globalStyle";
import SearchBar from "./SearchBar";
import Plants from "./Plants";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  return (
    <SearchContext.Provider value={([search, setSearch], [query, setQuery])}>
      {children}
    </SearchContext.Provider>
  );
};

const SearchPage = () => {
  return (
    <Container>
      <Wrapper margin="40px 0 20px 0">
        <Heading h1>
          <Emoji aria-label="seek"> 🧐 </Emoji> Search for a plant{" "}
          <Emoji aria-label="leaf"> 🌿 </Emoji>
        </Heading>
      </Wrapper>
      <SearchProvider>
        <SearchBar />
        <Paragraph margin="20px 0 20px 0">
          Data from{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://trefle.io/"}
          >
            https://trefle.io/
          </a>
        </Paragraph>
        <Plants />
      </SearchProvider>
    </Container>
  );
};

export default SearchPage;
