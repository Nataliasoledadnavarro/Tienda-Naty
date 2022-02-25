import Section from "./Section";
import Grid from '@mui/material/Grid';

const Main = ({productos, busqueda, totalResultados}) =>{
    
    return(
        <Grid sx={{width:"100%", height:"100%", pt:6}} >
         <Section productos={productos} busqueda={busqueda} totalResultados={totalResultados}/>
        </Grid>
    )
}

export default Main;

