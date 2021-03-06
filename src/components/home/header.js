import React from "react";
import cifrao from "../../assets/cifrao.svg";
import user from "../../assets/perfil.svg";
import logout from "../../assets/logout.svg";
import { UseMediaQuery } from "../../utils/mediaQuery";
import { SaldoUser } from "../../utils/obterSaldoUser";

export const Header = () => {
  const media = UseMediaQuery("(max-width: 1200px)");
  const isPhone = UseMediaQuery("(max-width: 700px)");
  const [deslogar, setDeslogar] = React.useState(false);
  const [saldo, setSaldo] = React.useState("");

  React.useEffect(() => {
    SaldoUser().then((s) => {
      const saldoFormatado = Number(s / 100).toLocaleString("pt-BR");
      setSaldo(saldoFormatado);
    });
  }, []);

  return (
    <div className="header">
      <div className="header-content">
        <div className="divSaldo">
          <div className="saldo">
            <img src={cifrao} alt="cifrao" />
            <span>Saldo em conta</span>
          </div>
          <h2>{`R$ ${saldo}`}</h2>
        </div>
        {!media && (
          <div className="usuario">
            {!isPhone && (
              <button onClick={() => setDeslogar(deslogar ? false : true)}>
                <img src={user} alt="usuário" />
              </button>
            )}
            {(deslogar || isPhone) && (
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
