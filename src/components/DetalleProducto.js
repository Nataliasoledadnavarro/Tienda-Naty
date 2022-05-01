import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const DetalleProducto = () => {
  const params = useParams();
  const [producto, setProducto] = useState({});
  const [indiceImagen, setIndiceImagen] = useState(0);
  const [reviews, setReviews] = useState({});
  const [like, setLike] = useState(false);

  const handleMouseEnter = (index) => {
    setIndiceImagen(index);
  };

  const handleClickLike = (e) => {
    if (!like) {
      setLike(true);
    }
    if (like) {
      setLike(false);
    }
  };

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${params.idProducto}`)
      .then((res) => res.json())
      .then((data) => {
        fetch(`https://api.mercadolibre.com/reviews/item/${params.idProducto}`)
          .then((res) => res.json())
          .then((reviews) => {
            setProducto(data);
            setReviews(reviews);
          });
      });
  }, [params.idProducto]);

  return (
    <Container
      sx={{
        boxShadow: 1,
        marginTop: "50px",
        display: { xs: "block", md: "flex" },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "60%" },
          height: "500px",
          display: "flex",
        }}
      >
        <List sx={{ width: "20%" }}>
          {producto.pictures &&
            producto.pictures.slice(0, 8).map((producto, index) => (
              <ListItem
                disablePadding
                key={producto.id}
                onMouseEnter={() => handleMouseEnter(index)}
                sx={{
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "center",
                  border: "solid 1px rgb(182, 179, 179)",
                  borderRadius: "5px",
                  height: "50px",
                  width: "50px",
                  margin: "5px",
                }}
              >
                <Card sx={{ boxShadow: 0 }}>
                  <CardMedia
                    component="img"
                    alt={producto.title}
                    image={producto.url}
                    width="40"
                    height="40"
                  ></CardMedia>
                </Card>
              </ListItem>
            ))}
        </List>
        <Box sx={{ width: "80%" }}>
          {producto.pictures && (
            <Card
              sx={{
                boxShadow: "none",
                minWidth: 200,
                maxHeight: "450px",
              }}
            >
              <CardMedia
                component="img"
                alt="hola"
                image={producto.pictures[indiceImagen].url}
              ></CardMedia>
            </Card>
          )}
        </Box>
      </Box>
      <Box
        sx={{ width: { xs: "100%", md: "40%" }, height: "500px", ml: 2, mt: 2 }}
      >
        <Box
          width="100%"
          sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}
        >
          <IconButton
            size="medium"
            aria-label="Corazon"
            onClick={handleClickLike}
          >
            {like ? (
              <FavoriteIcon sx={{ color: "#3483fa" }} />
            ) : (
              <FavoriteBorderIcon sx={{ color: "#3483fa" }} />
            )}
          </IconButton>
        </Box>

        <Typography
          variant="body2"
          fontSize="14px"
          component="p"
          color="#9e9e9e"
        >
          {producto.condition === "new" ? "Nuevo" : "Usado"} /{" "}
          {producto.available_quantity && producto.available_quantity}{" "}
          disponibles.
        </Typography>
        <Typography variant="h6" component="p">
          {producto.title}
        </Typography>
        <Rating
          sx={{ color: "#3483fa", mt: 2 }}
          name="simple-controlled"
          value={
            reviews.rating_average !== undefined ? reviews.rating_average : 0
          }
          precision={0.5}
          size="small"
        />
        <Typography variant="h4" component="p" sx={{ fontWeight: 100, mt: 1 }}>
          $ {producto.price}
        </Typography>
      </Box>
    </Container>
  );
};

export default DetalleProducto;
