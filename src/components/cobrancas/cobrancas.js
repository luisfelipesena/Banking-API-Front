import React from "react";
import lupa from "../../assets/lupa.svg";
import impressao from "../../assets/impressao.svg";
import { UseMediaQuery } from "../../utils/mediaQuery";

export const Cobrancas = () => {
  const isPhone = UseMediaQuery("(max-width: 600px)");

  return (
    <div className="divConteudo">
      <div className="bellow-header" style={{ justifyContent: "flex-end" }}>
        <form className="input-procurar">
          <input
            placeholder={
              UseMediaQuery("(min-width: 450px)")
                ? "Procurar por Nome, E-mail ou CPF"
                : "Pesquisar"
            }
          />
          <button>
            <img alt="lupa" src={lupa} />
            <span>Buscar</span>
          </button>
        </form>
      </div>
      <div className="tabela-clientes">
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
              {!isPhone && <th>Descrição</th>}
              <th>Valor</th>
              {!isPhone && <th>Status</th>}
              {!isPhone && <th>Vencimento</th>}
              {!isPhone && <th>Boleto</th>}
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <h2 className="nome-email-cliente">Nome completo o meu</h2>
              </td>
              {!isPhone && <td>Pagamento referente á...</td>}
              <td>R$ 0.000,00</td>
              {!isPhone && <td className={"em-dia"}>Pago</td>}
              {!isPhone && <td>12/12/2020</td>}
              {!isPhone && (
                <td>
                  <img alt="impressão" src={impressao} />
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
