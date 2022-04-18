import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../img/logo.png";
import { IoLocationOutline } from "react-icons/io5";



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Img = styled("img")({
  maxWidth: "80%",
  height:"70px",
   magin:0
});

const NavDesktop = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ display: "flex", bgcolor: "#fff159", boxShadow: 0 }}>
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
          <Box sx={{width:"15%", bgColor:"red"}}>
            <Img src={logo} alt="logo manos" className="logo"></Img>
            <Box  sx={{ display: "flex", alignItems:"center",justifyContent: "center", width: "75%" }}>
              <IconButton
                size="large"
                aria-label="location"
              >
                <IoLocationOutline color="#212121"/>
              </IconButton>
              <Typography
                variant="p"
                component="p"
                color="#212121"

              >
                Enviar a Capital Federal
              </Typography>
            </Box>
          </Box>



          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavDesktop








/*import "../Styles/Nav.css";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import logo from "../img/logo.png";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Busqueda from "./Busqueda";

const Nav = () => {
  return (
    <AppBar
      position="static"
      sx={{ display: "flex", bgcolor: "#fff159", boxShadow: 0 }}
    >
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={3}>
            <Toolbar>
              <img src={logo} alt="logo manos" className="logo"></img>
              <Typography
                variant="h6"
                component="h1"
                sx={{
                  color: "#032f68",
                  fontWeight: "bold",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span>tienda</span>
                <span>naty</span>
              </Typography>
            </Toolbar>
            
          </Grid>
        </Grid>
        <Busqueda />
      </Container>
    </AppBar>
  );
};

export default Nav;*/
