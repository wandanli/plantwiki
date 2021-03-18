import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    primary: "#06B49A",
    secondary: "#cc3053",
    greyLight: "#f5f5f5",
    greyDark: "#c2c2c2",
    black: "#212121",
    white: "fff",
  },
  fontFamily: {
    heading: "Righteous",
    paragraph: "Barlow",
  },
  fontSize: {
    small: "1.4rem",
    medium: "1.6rem",
    large: "1.8rem",
  },
  fontWeight: {
    normal: 400,
    bold: 700,
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
