import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Busqueda from "./components/Busqueda";
import Error404 from "./components/Error404";
import DetalleProducto from "./components/DetalleProducto";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Busqueda /> }/>
        <Route path="/:busqueda/:producto/:idProducto" element={<DetalleProducto /> }/>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
