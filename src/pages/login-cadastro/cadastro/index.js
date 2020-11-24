import { Link } from "react-router-dom";
import { Form } from "../../../components/cadastro/form";
import logo_cubos from "../../../assets/logo_cubos.svg";
import "../styles.css";

export const Cadastro = () => {
  return (
    <div className="body">
      <div className="centro">
        <div className="painelLogin">
          <div className="formulario">
            <img src={logo_cubos} alt="logo cubos" />
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
    </div>
  );
};
