import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Texto = styled.p`
  background-color: rgb(127, 224, 237);
  color: #333;
  padding: 1rem;
  font-size: 16px;
  text-align: center;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const Resultado = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <Texto>Choose brand, year and type of insurance</Texto>
  ) : (
    <TransitionGroup component="p" className="resultado">
      <CSSTransition
        classNames="resultado"
        key={cotizacion}
        timeout={{ enter: 500, exit: 500 }}
      >
        <Texto>The total is:$ {cotizacion}</Texto>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Resultado;
