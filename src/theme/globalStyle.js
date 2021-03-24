import styled, { css, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    font-size: 62.5%; /* 16px * 62.5% = 10px -> 1rem = 10px */
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 0;
}

body {
  font-family: ${(props) => props.theme.fontFamily.paragraph};
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  line-height: 1.3;
  color: ${(props) => props.theme.color.black};
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: calc(1110px + 24px + 24px);
  min-width: 280px;
  margin: 0 auto;
  padding: ${(props) => props.padding || "24px 24px 24px 24px"};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  flex-wrap: ${(props) => props.flexWrap || "wrap"};
  justify-content: ${(props) => props.flexJC || "center"};
  align-items: ${(props) => props.flexAI || "center"};
  margin: ${(props) => props.margin || ""};
`;

export const Heading = styled.h1`
  margin: ${(props) => props.margin || ""};
  text-transform: capitalize;
  font-family: ${(props) => props.theme.fontFamily.heading};
  font-weight: bolder;
  ${(props) =>
    props.primary &&
    css`
      color: ${(props) => props.theme.color.primary}; ;
    `};
  ${(props) =>
    props.secondary &&
    css`
      color: ${(props) => props.theme.color.secondary}; ;
    `};
  ${(props) =>
    props.h1 &&
    css`
      font-size: 3.2rem;
    `};
  ${(props) =>
    props.h2 &&
    css`
      font-size: 2.4rem;
    `};
  ${(props) =>
    props.h3 &&
    css`
      font-size: 2.08rem;
    `};
  ${(props) =>
    props.h4 &&
    css`
      font-size: 1.6rem;
    `};
  ${(props) =>
    props.h5 &&
    css`
      font-size: 1.28rem;
    `};
  ${(props) =>
    props.h6 &&
    css`
      font-size: 1.12rem;
    `};
`;

export const Emoji = styled.span.attrs((props) => ({
  role: "img",
  // "aria-label": props.ariaLabel,
}))``;

export const Paragraph = styled.p`
  margin: ${(props) => props.margin || ""};
  text-align: ${(props) => props.textAlign || "center"};
  ${(props) =>
    props.large &&
    css`
      font-size: 1.8rem;
    `};
  ${(props) =>
    props.small &&
    css`
      font-size: 1.4rem;
    `};
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  object-position: center center;
`;

export const Button = styled.button`
  background: none;
  /* can not be passed to custom button on other component */
  /* cursor: pointer;
  &:focus,
  &:active {
    outline: none;
  } */
`;

export default GlobalStyle;
