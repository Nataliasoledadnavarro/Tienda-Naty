import Cards from "./Cards";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const Section = ({productos}) =>{
   

    return(
        <Container>
        <Grid container  alignItems="flex-end" direction="column">
         <Cards productos={productos}/>
        </Grid>
        </Container>
        
    )
}

export default Section;