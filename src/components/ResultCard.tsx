import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const CardWrapper = styled(Card)({
  display: "flex",
  justifyContent: "left",
});

const ResultCard = () => {
  return (
    <CardWrapper sx={{ my: 2 }}>
      <CardMedia
        component="img"
        height="64"
        width="64"
        image="/assets/img/avatar.jpg"
        alt="Avatar"
      />
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          variant="body2"
          color="text.secondary"
        >
          NAME
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          number of followings
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </CardWrapper>
  );
};

export default ResultCard;
