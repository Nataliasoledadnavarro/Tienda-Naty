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

const DetalleProducto = () => {
  const params = useParams();
  const [producto, setProducto] = useState({});
  const [descripcion, setDescripcion] = useState({});
  const [indiceImagen, setIndiceImagen] = useState(0);

  const handleMouseEnter = (index) => {
    setIndiceImagen(index);
  };

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${params.idProducto}`)
      .then((res) => res.json())
      .then((data) => {
        fetch(
          `https://api.mercadolibre.com/items/${params.idProducto}/description`
        )
          .then((res) => res.json())
          .then((descripcion) => {
            setProducto(data);
            setDescripcion(descripcion);
          });
      });
  }, []);
  console.log(producto);
  console.log(descripcion);
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
                Key={producto.id}
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
                image={
                  producto.pictures[indiceImagen].url
                } /*resolver el hover*/
              ></CardMedia>
            </Card>
          )}
        </Box>
      </Box>
      <Box sx={{ width: { xs: "100%", md: "40%" }, height: "500px", ml: 1 }}>
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
          sx={{ color: "#3483fa" }}
          name="simple-controlled"
          value={4.3}
          precision={0.5}
          size="small"
        />
        <Typography variant="h4" component="p" sx={{ fontWeight: 100 }}>
          $ {producto.price}
        </Typography>
      </Box>
    </Container>
  );
};

export default DetalleProducto;
