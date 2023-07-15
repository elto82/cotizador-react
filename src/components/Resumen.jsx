import styled from "@emotion/styled";
import { primerMayuscula } from "../helpers/helper.js";

const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;
const Resumen = ({ datos }) => {
  //extraer datos
  const { marca, year, plan } = datos;
  if (marca === "" || year === "" || plan === "") return null;

  return (
    <ContenedorResumen>
      <h2>Quotation summary</h2>
      <ul>
        <li>Brand: {primerMayuscula(marca)}</li>
        <li>Plan: {primerMayuscula(plan)}</li>
        <li>Year: {primerMayuscula(year)}</li>
      </ul>
    </ContenedorResumen>
  );
};

export default Resumen;
