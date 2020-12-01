import React from "react";
import lupa from "../../assets/lupa.svg";
import gmail from "../../assets/gmail.svg";
import telefone from "../../assets/telefone.svg";
import editar from "../../assets/editar-cliente.svg";
import { UseMediaQuery } from "../../utils/mediaQuery";

export const Content = () => {
  const isPhone = UseMediaQuery("(max-width: 600px)");

  return (
    <div className="divConteudo">
      <div className="bellow-header">
        <button>Adicionar cliente</button>
        <form className="input-procurar">
          <input placeholder="Procurar por Nome, E-mail ou CPF" />
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
              <th>Cobranças Feitas</th>
              <th>Cobranças Recebidas</th>
              {!isPhone && <th>Status</th>}
              {!isPhone && <th></th>}
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <h2 className="nome-email-cliente">
                  {!isPhone ? (
                    <span>Nome e Sobrenome do Cliente</span>
                  ) : (
                    <input className="editar-cliente" />
                  )}
                </h2>
                <div className="descricoes-cliente">
                  <img src={gmail} alt="email" />
                  <span>email</span>
                </div>
                <div className="descricoes-cliente">
                  <img src={telefone} alt="telefone" />
                  <span>telefone</span>
                </div>
              </td>

              <td>R$ 00.000.000,00</td>
              <td>R$ 00.000.000,00</td>
              {!isPhone && <td className={"em-dia"}>em dia</td>}
              {!isPhone && (
                <td>
                  <button>
                    <img alt="editar cliente" src={editar} />
                  </button>
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
