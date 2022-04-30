import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import { height } from "@mui/system";

const DetalleProducto = () => {
  const params = useParams();
  const [producto, setProducto] = useState({});
  const [descripcion, setDescripcion] = useState({});

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
    <Container sx={{ boxShadow: 1, marginTop: "50px" }}>
      <Box sx={{ width: "60%", height: "500px", display: "flex" }}>
        <List sx={{ width: "10%" }}>
          {producto.pictures &&
            producto.pictures.slice(0, 8).map((producto) => (
              <ListItem
                disablePadding
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
        <Box width="90%">
          {producto.pictures && (
            <Card
              sx={{
                boxShadow: 0,
                width: "300px",
                height: "450px",
              }}
            >
              <CardMedia
                component="img"
                alt="hola"
                image={producto.pictures[0].url} /*resolver el hover*/
              ></CardMedia>
            </Card>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default DetalleProducto;
