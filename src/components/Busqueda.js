import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Container from "@mui/material/Container";
import Main from "./Main";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";

const Busqueda = () => {
  const [busqueda, setBusqueda] = useState("chocolate");
  const [valorDelInput, setValorDelInput] = useState("");
  const [productos, setProductos] = useState([]);
  const [totalResultados, setTotalResultados] = useState(0);

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`)
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.results);
        setTotalResultados(data.paging.total);
      });
  }, [busqueda]);

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBusqueda(valorDelInput);
  };

  return (
    <Box sx={{ bgcolor: "#fff159", boxShadow: 0, height: "50px" }}>
      <FormControl
        variant="outlined"
        sx={{ boxShadow: 1, bgcolor: "white", width: "40%", ml: 50 }}
      >
        <OutlinedInput
          type="text"
          onChange={handleChange}
          sx={{ borderRadius: "2px" }}
          size="small"
          endAdornment={
            <InputAdornment position="end">
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton
                aria-label="Botón de busqueda"
                onClick={handleSubmit}
                edge="end"
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Main
        productos={productos}
        busqueda={busqueda}
        totalResultados={totalResultados}
      />
    </Box>
  );
};

export default Busqueda;
