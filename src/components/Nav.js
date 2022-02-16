import "../Styles/Nav.css"
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import logo from "../logo.png";
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

const Nav = ({ handleChange, handleSubmit }) => {
    return (
        <AppBar position="static" sx={{ display: "flex", bgcolor: "#fff159", boxShadow: 0, height: "100px" }}>
            <Container>
                <Grid container alignItems="center">
                    <Grid item xs={3}>
                        <Toolbar>
                            <img src={logo} alt="logo manos" className="logo"></img>

                            <Typography variant="h6" component="h1" sx={{ color: "#032f68", fontWeight: "bold", display: "flex", flexDirection: "column" }}>
                                <span>tienda</span>
                                <span>naty</span>
                            </Typography>
                        </Toolbar>
                    </Grid>
                    <Grid item xs={5}>
                        <FormControl  fullWidth variant="outlined" sx={{ boxShadow: 1,}} >
                            <OutlinedInput
                                type="text"
                                onChange={handleChange}
                                sx={{bgcolor:"white", borderRadius: "2px"}} 
                                size="small"
                                endAdornment={
                                    <InputAdornment position="end">
                                         <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                        <IconButton
                                            aria-label="Botón de busqueda"
                                            onClick={handleSubmit}
                                            edge="end"
                                        >
                                          <SearchIcon />  
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>



                        {/*<Box component="form" onSubmit={handleSubmit} >
                            <InputBase
                                sx={{ bgcolor: "white", height: "40px", width: "100%", p: "15px" }}
                                placeholder="Buscar productos, marcas y más"
                                inputProps={{ 'aria-label': 'Buscar productos, marcas y más' }}
                                onChange={handleChange}
                            />
                            <IconButton type="submit" sx={{ p: '10px', bgcolor: "white", borderRadius: "0", height: "40px", mb: "2px" }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
    </Box>*/}
                    </Grid>
                </Grid>
            </Container>
        </AppBar>
    )
}

export default Nav;