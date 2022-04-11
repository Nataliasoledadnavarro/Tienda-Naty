import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Error404 from "./components/Error404";
import DetalleProducto from "./components/DetalleProducto";
import Home from "./components/Home";
import ResultadosBusqueda from "./components/ResultadosBusqueda";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/:busqueda/page/:pagina"
          element={<ResultadosBusqueda />}
        />
        <Route
          path="/:busqueda/:producto/:idProducto"
          element={<DetalleProducto />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
