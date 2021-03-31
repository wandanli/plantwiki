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

export const SearchProvider = (props) => {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={[search, setSearch]}>
      {props.children}
    </SearchContext.Provider>
  );
};

const SearchPage = () => {
  return (
    <Container>
      <Wrapper margin="40px 0 20px 0">
        <Heading h2>
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
