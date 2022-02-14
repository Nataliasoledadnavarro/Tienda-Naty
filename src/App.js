import Nav from "./components/Nav";
import Box from '@mui/material/Box';
import Main from "./components/Main";
import { useState, useEffect } from "react";

const App = () => {
  const [busqueda, setBusqueda] = useState("chocolate")
  const [valorDelInput, setValorDelInput] = useState("")
  const [productos, setProductos] = useState([])


  useEffect(() => {
      fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`)
          .then((res) => res.json())
          .then((data) => {
              setProductos(data.results)
          });
  }, [busqueda]);

  const handleChange = (e) => {
      setValorDelInput(e.target.value);
      console.log(productos)
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      setBusqueda(valorDelInput);
      console.log(productos)
  };

  return (
    <Box>
       <Nav handleChange={handleChange} handleSubmit={handleSubmit} />
      <Main productos={productos}/>
    </Box>
  )
}

export default App;