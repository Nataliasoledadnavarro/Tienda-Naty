import Cards from "./Cards";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Filtros from "./Filtros"


const Section = ({ productos, busqueda, totalResultados}) => {
    
    return (
        <Container sx={{ bgcolor: "red"}}>
            <Grid container  justifyContent= "space-around">
                <Grid item xs={3} sx={{ bgcolor: "blue" }} direction="column">
                    <Filtros busqueda={busqueda}  totalResultados={totalResultados} />
                </Grid>
                <Grid item xs={8} sx={{ bgcolor: "pink" }} direction="column">
                    <Cards productos={productos} busqueda={busqueda} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Section;