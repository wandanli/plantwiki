import React, { createContext, useState } from "react";
import {
  Container,
  Heading,
  Wrapper,
  Emoji,
  Paragraph,
  Image,
  MaxWidthBreakpoints,
} from "../../theme/globalStyle";
import SearchBar from "./SearchBar";
// import Plants from "./Plants";
import GithubLink from "../GithubLink";
import trefleScreenShot from "../../images/Screen-Shot-trefle.png";
import styled from "styled-components";

export const SearchContext = createContext();

export const SearchProvider = (props) => {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={[search, setSearch]}>
      {props.children}
    </SearchContext.Provider>
  );
};

const StyledImage = styled(Image)`
  height: auto;
  @media ${MaxWidthBreakpoints.small} {
    width: 100%;
    height: auto;
  } ;
`;

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
        <Paragraph>Unfortunately, the Trefle API has shut down.</Paragraph>
        <Wrapper margin="20px 10px">
          <StyledImage
            width="600"
            height="140"
            src={trefleScreenShot}
          ></StyledImage>
        </Wrapper>

        {/* <Plants /> */}
      </SearchProvider>
      <GithubLink />
    </Container>
  );
};

export default SearchPage;
