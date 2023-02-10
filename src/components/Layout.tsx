import { ReactNode } from "react";
import { styled } from "@mui/material/styles";
import { GlobalStyles } from "@mui/material";
import Header from "../components/Header";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";

const breakpoints = [320, 992, 1440];

const mediaQuery = breakpoints.map(
  (breakpoint) => `@media (min-width: ${breakpoint}px)`
);

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  //   width: "100vw",
  height: "100vh",
  backgroundColor: "#FFFFFF",
  // [mediaQuery[0]]: {
  //   width: "100%",
  //   backgroundColor: "red",
  // },
  [mediaQuery[1]]: {
    width: "587px",
    // backgroundColor: "blue",
  },
  [mediaQuery[2]]: {
    width: "466px",
    backgroundColor: "green",
  },
});

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  fontFamily: "Arsenal , Helvetica, sans-serif",
  flexGrow: 1,
  overflow: "scroll",
  padding: "16px",
});

const Footer = styled(Paper)({});

const Layout = ({ children }: { children: ReactNode }) => {
  const redirectToFavourite = () => {};

  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            margin: "0",
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
          },
          "#root": {
            display: "flex",
            justifyContent: "center",
            [mediaQuery[0]]: {
              width: "100vw",
              backgroundColor: "pink",
            },
          },
        }}
      />
      <Container>
        <Header />
        <Wrapper>{children}</Wrapper>
        <Footer elevation={3}>
          <BottomNavigation
            showLabels
            // value={value}
            // onChange={(event, newValue) => {
            //   setValue(newValue);
            // }}
          >
            <BottomNavigationAction label="SearchIcon" icon={<SearchIcon />} />
            <a href="favourites">
              <BottomNavigationAction
                label="Favorites"
                icon={<FavoriteIcon />}
              />
            </a>
          </BottomNavigation>
        </Footer>
      </Container>
    </>
  );
};

export default Layout;
