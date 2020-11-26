import React from "react";
import { useMediaQuery } from "../../utils/mediaQuery";
import cifrao from "../../assets/cifrao.svg";
import user from "../../assets/perfil.svg";
import logout from "../../assets/logout.svg";

export const Header = () => {
  const [deslogar, setDeslogar] = React.useState(false);
  return (
    <div className="header">
      <div className="header-content">
        <div className="divSaldo">
          <div className="saldo">
            <img src={cifrao} alt="cifrao" />
            <span>Saldo em conta</span>
          </div>
          <h2>R$ 0,00</h2>
        </div>
        <div className="usuario">
          <button onClick={() => setDeslogar(deslogar ? false : true)}>
            <img src={user} alt="usuário" />
          </button>
          {deslogar && (
            <button
              onClick={() => {
                localStorage.setItem("token", null);
                window.location.href = "/";
              }}
              className="logout"
            >
              <img src={logout} alt="logout" />
              <span>Deslogar</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
