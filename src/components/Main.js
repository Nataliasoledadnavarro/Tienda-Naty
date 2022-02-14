import Section from "./Section";
import Grid from '@mui/material/Grid';

const Main = () =>{
    return(
        <Grid sx={{bgcolor:"rgba(0,0,0,.1)", width:"100%", height:"100vh"}} xs={12} >
         <Section/>
        </Grid>
    )
}

export default Main;

