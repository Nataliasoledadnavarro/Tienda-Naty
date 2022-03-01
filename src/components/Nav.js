import "../Styles/Nav.css"
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import logo from "../logo.png";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";



const Nav = () => {
    return (
        <Link to="/">
        <AppBar position="static" sx={{ display: "flex", bgcolor: "#fff159", boxShadow: 0 }}>
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
                </Grid>
            </Container>
        </AppBar>
        </Link>

    )
}

export default Nav;