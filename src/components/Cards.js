import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import BoltIcon from '@mui/icons-material/Bolt';
import Box from '@mui/material/Box';


const Cards = ({productos}) => {
    const Img = styled('img')({
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });
    const cards = productos.map(producto =>{
        return(
<Paper
            sx={{
                p: 2,
                maxWidth: 800,
                flexGrow: 1,
                mb:"2px",
                mr:6
            }}
        >
            <Grid container spacing={2}  >
                <Grid item>
                    <ButtonBase sx={{ width: 200, height: 180 }}>
                        <Img alt="producto" src="https://placekitten.com/200/300" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="body1" component="p" sx={{ fontSize: "20px", fontWeight: "100" }}>
                                {producto.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ textDecoration: "line-through", mt: "3" }}>
                                $199
                            </Typography>
                            <Box sx={{ display: "flex" }}>
                                <Typography variant="body2" color="text.primary" sx={{ fontSize: "24px" }}>
                                    $199
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: "14px", color: 'success.main', mt: "5px", ml: "5px" }}>
                                    52% OFF
                                </Typography>
                            </Box>

                        </Grid>
                        <Grid item>
                            <Stack direction="row" spacing={1} mt={2}>
                                <Chip label="Llega mañana" sx={{
                                    color: "#00a650", bgcolor: "#e6f7ee", fontSize: "14px",
                                    fontWeight: 500, p: "2px"
                                }} />
                                <Chip color="success" sx={{
                                    color: "#00a650", bgcolor: "transparent", fontSize: "14px",
                                    fontWeight: 500, p: "2px"
                                }} icon={<BoltIcon />} label="FULL" />

                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
        </Paper>
        )
    })


   

    return (
       
       cards
    );


}

export default Cards;