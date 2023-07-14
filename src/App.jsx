import Formulario from "./components/Formulario";
import Header from "./components/Header";
import styled from "@emotion/styled";

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
  return (
    <Contenedor>
      <Header titulo="Quotation" />
      <ContenedorFormulario>
        <Formulario />
      </ContenedorFormulario>
    </Contenedor>
  );
};

export default App;
