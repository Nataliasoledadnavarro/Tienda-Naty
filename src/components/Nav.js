import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import logo from "../img/logo.png";
import logoDisney from "../img/logo-disney.png";
import { IoLocationOutline } from "react-icons/io5";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import ListItemIcon from "@mui/material/ListItemIcon";
import { FiShoppingCart } from "react-icons/fi";
import MenuIcon from "@mui/icons-material/Menu";
import Busqueda from "../components/Busqueda";

const Img = styled("img")({
  width: "80%",
  minWidth: "110px",
  maxWidth: "150px",
  magin: 0,
});

const NavDesktop = () => {
  const [categoriaElegida, setCategoriaElegida] = useState("");
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategorias(data);
      });
  }, [categorias]);

  const handleChange = (event) => {
    setCategoriaElegida(event.target.value);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "#fff159",
        height: { xl: "110px", lg: "110px", md: "80px", sm: "80px", xs: "80px" },
        display: "flex",
        alignItems: "center",
      }}
    >
      <AppBar
        position="static"
        sx={{
          bgcolor: "#fff159",
          boxShadow: 0,
          width: { xl: "80%", lg: "100%" },
          m: "auto",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              width: {
                xl: "15%",
                lg: "15%",
                md: "25%",
                sm: "35%",
                xs: "40%",
              },
            }}
          >
            <Link to="/">
              <Img src={logo} alt="logo manos"></Img>
            </Link>
            <Box
              sx={{
                display: { lg: "flex", md: "none", sm: "none", xs: "none" },
                alignItems: "center",
                justifyContent: "center",
                width: "80%",
              }}
            >
              <IconButton size="medium" aria-label="location">
                <IoLocationOutline color="#212121" />
              </IconButton>
              <Typography
                variant="body2"
                component="p"
                color="#212121"
                sx={{ fontSize: "12px" }}
              >
                Enviar a Capital Federal
              </Typography>
            </Box>
          </Box>

          <Box sx={{ width: "50%", bgcolor: "transparent" }}>
            <Busqueda />
            <Box
              sx={{
                width: "100%",
                bgcolor: "#fff159",
              }}
            >
              <List
                sx={{
                  display: {
                    xl: "flex",
                    lg: "none",
                    md: "none",
                    sm: "none",
                    xs: "none",
                  },
                }}
              >
                <ListItem disablePadding>
                  <FormControl
                    fullWidth
                    variant="standard"
                    sx={{ minWidth: "100px" }}
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      sx={{ fontSize: "14px" }}
                    >
                      Categorías
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={categoriaElegida}
                      label="Categoría"
                      onChange={handleChange}
                      sx={{ fontSize: "14px" }}
                    >
                      {categorias.map((categoria) => (
                        <MenuItem
                          value={categoria.id}
                          Key={categoria.id}
                          sx={{ fontSize: "14px" }}
                        >
                          {categoria.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText secondary="Ofertas" color="#212121" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#">
                    <ListItemText secondary="Historial" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#">
                    <ListItemText secondary="Supermercado" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#">
                    <ListItemText secondary="Moda" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#">
                    <ListItemText secondary="Vender" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#">
                    <ListItemText secondary="Ayuda" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Box>

          <Box
            sx={{
              width: {
                xl: "35%",
                lg: "35%",
                md: "20%",
                sm: "15%",
                xs: "10%",
              },
            }}
          >
            <Box
              sx={{
                height: "60%",
                display: {
                  xl: "flex",
                  lg: "flex",
                  md: "none",
                  sm: "none",
                  xs: "none",
                },
                alignItems: "flex-end",
                ml: 1,
              }}
            >
              <Img
                src={logoDisney}
                alt="logo Disney"
                sx={{ width: "25%" }}
              ></Img>
              <Typography
                component="p"
                color="#212121"
                sx={{ fontSize: "12px", pb: "3px" }}
              >
                Suscribite al nivel 6: beneficios exclusivos
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                bgcolor: "#fff159",
                ml: 1,
                display: "flex",
              }}
            >
              <List
                sx={{
                  display: {
                    xl: "flex",
                    lg: "flex",
                    md: "none",
                    sm: "none",
                    xs: "none",
                  },
                  justifyContent: "space-around",
                  height: "40%",
                  width: "70%",
                }}
              >
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#" sx={{ p: 0 }}>
                    <ListItemText secondary="Creá tu cuenta" color="#212121" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#" sx={{ p: 0 }}>
                    <ListItemText secondary="Ingresá" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#" sx={{ p: 0 }}>
                    <ListItemText secondary="Mis cuentas" />
                  </ListItemButton>
                </ListItem>
              </List>
              <Box
                sx={{
                  width: "95%",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "initial" },
                }}
              >
                <IconButton
                  aria-label="menu"
                  sx={{
                    display: {
                      xl: "none",
                      lg: "none",
                      md: "flex",
                      sm: "flex",
                      xs: "flex",
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>

                <IconButton aria-label="carrito" size="small">
                  <FiShoppingCart />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavDesktop;
