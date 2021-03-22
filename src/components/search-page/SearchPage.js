import React from "react";
import { Container, Heading, Wrapper, Emoji } from "../../theme/globalStyle";
import SearchBar from "./SearchBar";

const SearchPage = () => {
  return (
    <Container>
      <Wrapper margin="40px 0 20px 0">
        <Heading h1>
          <Emoji ariaLabel="seek"> 🧐 </Emoji> Search for a species{" "}
          <Emoji ariaLabel="leaf"> 🌿 </Emoji>
        </Heading>
      </Wrapper>
      <SearchBar />
    </Container>
  );
};

export default SearchPage;
