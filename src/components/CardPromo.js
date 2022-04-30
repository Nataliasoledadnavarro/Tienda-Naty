import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

const CardPromo = ({ titulo, link, icono }) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: "0",
        boxShadow: 0,
        height: "100%",
      }}
    >
      <Link to="">
        <Avatar
          sx={{
            bgcolor: "transparent",
            border: "1px solid #80808033",
            color: "primary.light",
            ml: 2,
          }}
        >
          {icono}
        </Avatar>
      </Link>

      <Box sx={{ ml: 2 }}>
        <Typography sx={{ fontSize: 16 }} color="text.primary">
          {titulo}
        </Typography>

        <Link to="">
          <Typography
            size="small"
            sx={{
              fontSize: 12,
              textTransform: "capitalize",
              color: "primary.light",
              mt: "5px",
            }}
          >
            {link}
          </Typography>
        </Link>
      </Box>
    </Card>
  );
};

export default CardPromo;
