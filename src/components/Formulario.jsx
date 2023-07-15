import styled from "@emotion/styled";
import { useState } from "react";
import {
  obtenerDiferenciaYear,
  calcularMarca,
  obtenerPlan,
} from "../helpers/helper.js";

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label = styled.label`
  flex: 0 0 100px;
`;
const Select = styled.select`
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #2ca7b7;
  border-radius: 0.25rem;
  background-color: #e9ecef;
  -webkit-appearance: none;
  color: #212529;
  &:hover {
    cursor: pointer;
  }
`;
const InputRadio = styled.input`
  margin: 0 1rem;
  width: 20px;
  height: 20px;
  &:hover {
    cursor: pointer;
  }
`;
const Boton = styled.button`
  background-color: #2ca7b7;
  font-size: 16px;
  width: auto;
  border: none;
  padding: 0.5rem 1rem;
  margin-top: 12px;
  border-radius: 0.25rem;
  color: #fff;
  font-weight: 700;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #1d8a99;
    cursor: pointer;
  }
`;
const Error = styled.div`
  background-color: red;
  color: #fff;
  padding: 0.5rem;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

const Formulario = ({ setResumen }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState(false);
  // extraer datos del state
  const { marca, year, plan } = datos;
  //obtener los valores del formulario
  const handleOnchage = (e) => {
    e.preventDefault();
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleCotizar = (e) => {
    e.preventDefault();
    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    //base
    let resultado = 2000;
    //obtener diferencia de años
    const diferencia = obtenerDiferenciaYear(year);
    //por cada año hay que restar el 3%
    resultado -= (diferencia * 3 * resultado) / 100;
    //americano 15
    //asiatico 5
    //europeo30
    resultado = calcularMarca(marca) * resultado;
    //basico aumenta 20%
    //complete aumenta 50%
    const incrementoPlan = obtenerPlan(plan);
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
    //total
    setResumen({
      cotizacion: resultado,
      datos,
    });
  };
  return (
    <form onSubmit={handleCotizar}>
      {error ? <Error>All fields are required</Error> : null}
      <Campo>
        <Label>Brand</Label>
        <Select name="marca" value={marca} onChange={handleOnchage}>
          <option value="">**Select**</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asian">Asian</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Year</Label>
        <Select name="year" value={year} onChange={handleOnchage}>
          <option value="">**Select**</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          id="basico"
          value="basic"
          checked={plan === "basic"}
          onChange={handleOnchage}
        />
        <Label htmlFor="basico">Basic</Label>
        <InputRadio
          type="radio"
          name="plan"
          id="completo"
          value="complete"
          checked={plan === "complete"}
          onChange={handleOnchage}
        />
        <Label htmlFor="completo">Complete</Label>
      </Campo>
      <Boton onClick={handleCotizar} type="button">
        Quote
      </Boton>
    </form>
  );
};

export default Formulario;
