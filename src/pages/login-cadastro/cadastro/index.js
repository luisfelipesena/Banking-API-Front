import { Link } from "react-router-dom";
import { Form } from "../../../components/cadastro/form";
import "../styles.css";

export const Cadastro = () => {
  return (
    <div className="centro">
      <div className="painelLogin">
        <div className="formulario">
          <img src="./images/logo_cubos.svg" alt="logo cubos" />
          <Form />
        </div>
      </div>
      <div className="cadastrarFooter">
        <p>
          Já possui uma conta?{" "}
          <Link to="/" className="link">
            Acesse agora!
          </Link>
        </p>
      </div>
    </div>
  );
};
