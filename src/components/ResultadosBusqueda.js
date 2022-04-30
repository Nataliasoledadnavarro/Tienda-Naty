import Grid from "@mui/material/Grid";
import Cards from "./Cards";
import Container from "@mui/material/Container";
import Filtros from "./Filtros";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ResultadosBusqueda = () => {
  const params = useParams();
  const [totalResultados, setTotalResultados] = useState(0);
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${params.busqueda}&q=gifquebusxadte&offset=${params.pagina}&limit=20`
    )
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.results);
        setTotalResultados(data.paging.total);
        params.pagina = data.paging.offset;
      });
  }, [params.busqueda, params.pagina]);

  let ultimaPagina = Math.trunc(totalResultados / 20 - 1);

  const handleChange = (event, value) => {
    navigate(`/${params.busqueda}/page/${value}`);
  };

  return (
    <Grid sx={{ width: "100%", height: "100%", pt: 6 }}>
      <Container>
        <Grid container justifyContent="space-around">
          <Grid item xs={3} direction="column">
            <Filtros
              busqueda={params.busqueda}
              totalResultados={totalResultados}
            />
          </Grid>
          <Grid item xs={8} direction="column">
            <Cards productos={productos} busqueda={params.busqueda} />
          </Grid>
        </Grid>
        {ultimaPagina >= 1 && (
          <Stack spacing={2}>
            <Pagination
              count={ultimaPagina > 40 ? 40 : ultimaPagina}
              shape="rounded"
              page={Number(params.pagina)}
              onChange={handleChange}
            />
          </Stack>
        )}
      </Container>
    </Grid>
  );
};

export default ResultadosBusqueda;
