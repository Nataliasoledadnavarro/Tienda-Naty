import Cards from "./Cards";
import Grid from '@mui/material/Grid';

const Section = () =>{

    return(
        <Grid container spacing={2} sx={8} justifyContent="flex-end">
         <Cards/>
        </Grid>
        
    )
}

export default Section;