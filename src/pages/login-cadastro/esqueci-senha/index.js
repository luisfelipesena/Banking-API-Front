import { Form } from "../../../components/esqueci-senha/form";
import logo_cubos from "../../../assets/logo_cubos.svg";
import "../styles.css";

export const EsqueciSenha = () => {
  return (
    <div className="body">
      <div className="centro">
        <div className="painelLogin">
          <div className="formulario">
            <img src={logo_cubos} alt="logo cubos" />
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};
