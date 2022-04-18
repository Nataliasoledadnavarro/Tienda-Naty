import { useState, useEffect } from "react";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
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

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Img = styled("img")({
  width: "80%",
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
        height: "120px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <AppBar
        position="static"
        sx={{
          display: "flex",
          bgcolor: "#fff159",
          boxShadow: 0,
          width: "80%",
          m: "auto",
        }}
      >
        <Toolbar>
          {/*<IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
  </IconButton>*/}
          <Box sx={{ width: "15%" }}>
            <Img src={logo} alt="logo manos" className="logo"></Img>
            <Box
              sx={{
                display: "flex",
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

          <Box sx={{ width: "50%" }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box
              sx={{
                width: "100%",

                bgcolor: "#fff159",
              }}
            >
              <List sx={{ display: "flex" }}>
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
              width: "35%",
            }}
          >
            <Box
              sx={{
                height: "60%",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-around",
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
              }}
            >
              <List
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  height: "40%",
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
                <ListItem disablePadding>
                  <ListItemButton sx={{ p: 0 }}>
                    <ListItemIcon>
                      <FiShoppingCart />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavDesktop;
