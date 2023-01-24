import { ReactNode } from "react";
import { styled } from "@mui/material/styles";
import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
// import Container from "@mui/material/Container";

const breakpoints = [320, 992, 1440];

const mediaQuery = breakpoints.map(
  (breakpoint) => `@media (min-width: ${breakpoint}px)`
);

const HeaderWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignContent: "top",
  padding: "16px",
  height: "85px",
  backgroundColor: "#FFFFFF",
});

const H1 = styled("h1")({
  margin: "0",
  fontWeight: "700",
  fontSize: "26px",
  lineHeight: "36px",
  color: "#000000",
});

const Header = () => {
  const handleChange = () => {
    return console.log("switch");
  };
  return (
    <HeaderWrapper>
      <H1>Search</H1>
      <Switch
        checked={false}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    </HeaderWrapper>
  );
};

export default Header;
