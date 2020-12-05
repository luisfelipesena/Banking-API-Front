import React from "react";
import user from "../../assets/perfil.svg";
import logout from "../../assets/logout.svg";
import { UseMediaQuery } from "../../utils/mediaQuery";

export const Header = () => {
  const media = UseMediaQuery("(max-width: 1200px)");
  const [deslogar, setDeslogar] = React.useState(false);
  return (
    <div className="cobrancas-header">
      <div className="header-content">
        <div className="criar-cobranca">
          <h2>{"// adicionar cliente"}</h2>
        </div>
        {!media && (
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
        )}
      </div>
    </div>
  );
};
