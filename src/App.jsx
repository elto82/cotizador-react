import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Resumen from "./components/Resumen";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
  color: #000;
`;
const App = () => {
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });
  //extraer datos
  const { datos } = resumen;

  return (
    <Contenedor>
      <Header titulo="Quotation" />
      <ContenedorFormulario>
        <Formulario setResumen={setResumen} />
        <Resumen datos={datos} />
      </ContenedorFormulario>
    </Contenedor>
  );
};

export default App;
