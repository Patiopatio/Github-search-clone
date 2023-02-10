import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addFavourite, removeFavourite } from "../redux/userDataSlice";

const CardWrapper = styled(Card)({
  display: "flex",
  justifyContent: "left",
});

const CardImg = styled(CardMedia)({
  width: "unset",
}) as unknown as typeof CardMedia;

type ResultCardsProps = {
  user: { login: string; avatar_url: string; repos_url: string; id: number };
};

const ResultCard = ({ user }: ResultCardsProps) => {
  const dispatch = useAppDispatch();
  const favouriteList = useAppSelector((state) => state.userData.favourite);
  // const [favouriteIconColor, setFavouriteIconColor] = useState(false);
  const isUserFavourite = favouriteList.find(
    (existingUser) => existingUser.id === user.id
  );

  const handleClick = () => {
    if (isUserFavourite) {
      return dispatch(removeFavourite(user));
    }
    dispatch(addFavourite(user));
  };

  // useEffect(() => {
  //   if (isUserFavourite) {
  //     return setFavouriteIconColor(true);
  //   }
  //   setFavouriteIconColor(false);
  // });

  return (
    <CardWrapper sx={{ my: 2 }}>
      <CardImg
        component="img"
        height="64"
        width="64"
        image={user.avatar_url}
        alt="Avatar"
      />
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          variant="body2"
          color="text.secondary"
        >
          {user.login}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          number of followings
        </Typography>
        <IconButton aria-label="delete" onClick={handleClick}>
          <FavoriteIcon color={isUserFavourite ? "secondary" : "action"} />
        </IconButton>
      </CardContent>
    </CardWrapper>
  );
};

export default ResultCard;
