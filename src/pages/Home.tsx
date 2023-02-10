import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import ResultCard from "../components/ResultCard";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchUsersByUserName, clear } from "../redux/searchSlice";
import useDebounce from "../hooks/useDebounce";

const Search = styled(OutlinedInput)({
  width: "100%",
});

const SearchBar = styled("div")({
  display: "flex",
});

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();
  const userList = useAppSelector((state) => state.search.user);
  const debounceValue = useDebounce(searchTerm, 500);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event?.target.value);
  };

  const handleDelete = () => {
    setSearchTerm("");
    dispatch(clear());
    navigate(`/`);
  };

  useEffect(() => {
    if (searchTerm) {
      dispatch(fetchUsersByUserName(searchTerm));
      navigate(`/?q=${searchTerm}`);
    } else {
      let searchQuery = searchParams.get("q");
      setSearchTerm(searchQuery || "");
    }
  }, [debounceValue]);

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
        {userList.map((user, id) => {
          return <ResultCard user={user} key={id} />;
        })}
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

// call the dispatch, see if the state changes - pass the state
// https://redux-toolkit.js.org/api/createAsyncThunk
