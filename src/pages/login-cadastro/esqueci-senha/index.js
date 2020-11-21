import { Form } from "../../../components/esqueci-senha/form";
import "../styles.css";

export const EsqueciSenha = () => {
  return (
    <div className="centro">
      <div className="painelLogin">
        <div className="formulario">
          <img src="./images/logo_cubos.svg" alt="logo cubos" />
          <Form />
        </div>
      </div>
    </div>
  );
};
