import Nav from "./components/Nav";
import Box from '@mui/material/Box';
import Main from "./components/Main";
import { useState, useEffect } from "react";

const App = () => {
  const [busqueda, setBusqueda] = useState("chocolate")
  const [valorDelInput, setValorDelInput] = useState("")
  const [productos, setProductos] = useState([])
  const [totalResultados, setTotalResultados] = useState(0)


  useEffect(() => {
      fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`)
          .then((res) => res.json())
          .then((data) => {
              setProductos(data.results)
              setTotalResultados(data.paging.total)
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
    <Box>
       <Nav handleChange={handleChange} handleSubmit={handleSubmit} />
      <Main productos={productos} busqueda={busqueda} totalResultados={totalResultados}/>
    </Box>
  )
}

export default App;