import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Filtros = ({ busqueda, totalResultados }) => {
  return (
    <Box>
      <Typography variant="h5" sx={{ textTransform: "capitalize", m: 1 }}>
        {busqueda}
      </Typography>
      <Typography variant="body2" sx={{ m: 1 }}>
        {totalResultados} resultados.
      </Typography>
    </Box>
  );
};

export default Filtros;
