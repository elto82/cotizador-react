import styled from "@emotion/styled";

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

const Formulario = () => {
  return (
    <form>
      <Campo>
        <Label>Brand</Label>
        <Select>
          <option value="">**Select**</option>
          <option value="americano">American</option>
          <option value="europeo">European</option>
          <option value="asiatico">Asian</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Year</Label>
        <Select>
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
        <InputRadio type="radio" name="plan" id="basico" value="basico" />{" "}
        <Label htmlFor="basico">Basic</Label>
        <InputRadio type="radio" name="plan" id="completo" value="completo" />
        <Label htmlFor="completo">Complete</Label>
      </Campo>
      <Boton type="button">Quote </Boton>
    </form>
  );
};

export default Formulario;
