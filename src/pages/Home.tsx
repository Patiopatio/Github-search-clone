import React, { useState } from "react";
import Layout from "../components/Layout";
import ResultCard from "../components/ResultCard";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { ChangeEvent } from "react";

const Search = styled(OutlinedInput)({
  width: "100%",
});

const SearchBar = styled("div")({
  display: "flex",
});

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event?.target.value);
  };

  const handleDelete = () => {
    setSearchTerm("");
  };

  return (
    <Layout>
      <div>
        <SearchBar>
          <Search
            id="outlined-basic"
            endAdornment={
              <HighlightOffIcon onClick={handleDelete} color="action" />
            }
            onChange={searchHandler}
            value={searchTerm}
          ></Search>
        </SearchBar>
        <ResultCard />
      </div>
    </Layout>
  );
};

export default Home;

// utilise media queries, align the container
// finish search input: input handler and delete
// cards
// align the cards
// pagination
// placeholder component with if check
