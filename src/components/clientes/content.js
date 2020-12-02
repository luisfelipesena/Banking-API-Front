import React from "react";
import lupa from "../../assets/lupa.svg";
import gmail from "../../assets/gmail.svg";
import telefone from "../../assets/telefone.svg";
import editar from "../../assets/editar-cliente.svg";
import { UseMediaQuery } from "../../utils/mediaQuery";

export const Content = () => {
  const isPhone = UseMediaQuery("(max-width: 700px)");
  const [inputClicado, setInput] = React.useState({ id: null, valor: false });

  return (
    <div className="divConteudo">
      <div className="bellow-header">
        <button>Adicionar cliente</button>
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
              <th>Cobranças Feitas</th>
              <th>Cobranças Recebidas</th>
              {!isPhone && <th>Status</th>}
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <h2 className="nome-email-cliente">
                  {!inputClicado.valor && !inputClicado.id !== "x" ? (
                    <span>Nome completo o meu</span>
                  ) : (
                    <input className="editar-cliente" />
                  )}
                </h2>
                <div className="descricoes-cliente">
                  <img src={gmail} alt="email" />
                  {!inputClicado.valor && !inputClicado.id !== "x" ? (
                    <span>email</span>
                  ) : (
                    <input className="editar-cliente" />
                  )}
                </div>
                <div className="descricoes-cliente">
                  <img src={telefone} alt="telefone" />
                  {!inputClicado.valor && !inputClicado.id !== "x" ? (
                    <span>telefone</span>
                  ) : (
                    <input className="editar-cliente" />
                  )}
                </div>
              </td>
              <td>R$ 0.000,00</td>
              <td>R$ 0.000,00</td>
              {!isPhone && <td className={"em-dia"}>em dia</td>}

              <td>
                <button
                  onClick={() =>
                    setInput({
                      id: "x",
                      valor: inputClicado.valor ? false : true,
                    })
                  }
                >
                  <img alt="editar cliente" src={editar} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
