import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/spinner/Spinner";

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
  const [cargando, setCargando] = useState(false);
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });
  //extraer datos
  const { cotizacion, datos } = resumen;
  return (
    <Contenedor>
      <Header titulo="Quotation" />
      <ContenedorFormulario>
        <Formulario setResumen={setResumen} setCargando={setCargando} />
        {cargando && <Spinner />}
        {!cargando && <Resumen datos={datos} />}
        {!cargando && <Resultado cotizacion={cotizacion} />}
      </ContenedorFormulario>
    </Contenedor>
  );
};

export default App;
