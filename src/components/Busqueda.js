import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Busqueda = () => {
  const navigate = useNavigate();
  const [valorDelInput, setValorDelInput] = useState("");

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    valorDelInput !== "" && navigate(`/${valorDelInput}/page/1`);
  };

  return (
    <FormControl
      component="form"
      onSubmit={handleSubmit}
      variant="outlined"
      sx={{ bgcolor: "white", width: "95%" }}
    >
      <OutlinedInput
        type="search"
        placeholder="Buscar productos, marcas y más..."
        onChange={handleChange}
        sx={{ borderRadius: "2px", fontSize: "14px", height: "40px" }}
        value={valorDelInput}
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
  );
};

export default Busqueda;
