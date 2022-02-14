import Cards from "./Cards";
import Grid from '@mui/material/Grid';

const Section = ({productos}) =>{
   

    return(
        <Grid container spacing={2} sx={8} justifyContent="flex-end">
         <Cards productos={productos}/>
        </Grid>
        
    )
}

export default Section;