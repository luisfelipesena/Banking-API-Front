import { Link } from "react-router-dom";
import { Form } from "../../../components/login/form";
import "../styles.css";

export const Login = () => {
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
          Não tem uma conta?{" "}
          <Link to="/cadastro" className="link">
            Cadastre-se!
          </Link>
        </p>
      </div>
    </div>
  );
};
