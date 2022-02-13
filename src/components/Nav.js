import { useState, useEffect } from "react";
import "../Styles/Nav.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import logo from "../logo.png";

const Nav = () => {
const [busqueda,setBusqueda]=useState("chocolate")
const [valorDelInput, setValorDelInput]=useState("")
const [productos, setProductos] = useState([])


useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`)
      .then((res) => res.json())
      .then((data) => {
        setProductos(data)
      });
  }, [busqueda]);
  
  const handleChange = (e) => {
    setValorDelInput(e.target.value); 
  };

const handleSubmit = (e) => {
    e.preventDefault();
    setBusqueda(valorDelInput);
  };


    return (
        <Box>
            <AppBar position="static" sx={{ display: "flex", bgcolor: "#fff159", boxShadow: 0, height: "100px" }}>
                <Grid container spacing={2} mt={1} sx={{ display: "flex", justifyContent: "center" }}>
                    <Grid Item xs={3} sx={{ pl: "0" }}>
                        <Toolbar sx={{ height: "80%" }}>
                            <img src={logo} alt="logo manos" className="logo"></img>

                            <Typography variant="h6" component="h1" sx={{ color: "#032f68", fontWeight: "bold", display: "flex", flexDirection: "column" }}>
                                <span>tienda</span>
                                <span>naty</span>
                            </Typography>
                        </Toolbar>
                    </Grid>
                    <Grid item xs={6} sx={{ height: "80%" }}>
                        <Box component="form" onSubmit={handleSubmit} >
                            <InputBase
                                sx={{ bgcolor: "white", height: "40px", width: "80%", p: "15px" }}
                                placeholder="Buscar productos, marcas y más"
                                inputProps={{ 'aria-label': 'Buscar productos, marcas y más' }}
                                onChange={handleChange}
                            />
                            <IconButton type="submit" sx={{ p: '10px', bgcolor: "white", borderRadius: "0", height: "40px", mb: "2px" }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </AppBar>
        </Box>
    )
}

export default Nav;