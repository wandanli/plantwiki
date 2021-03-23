import React from "react";
import {
  Container,
  Heading,
  Wrapper,
  Emoji,
  Paragraph,
} from "../../theme/globalStyle";
import SearchBar from "./SearchBar";
import Plants from "./Plants";

const SearchPage = () => {
  return (
    <Container>
      <Wrapper margin="40px 0 20px 0">
        <Heading h1>
          <Emoji aria-label="seek"> 🧐 </Emoji> Search for a species{" "}
          <Emoji aria-label="leaf"> 🌿 </Emoji>
        </Heading>
      </Wrapper>
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
      <Wrapper margin="40px 10px 20px 10px">
        <Plants />
      </Wrapper>
    </Container>
  );
};

export default SearchPage;
