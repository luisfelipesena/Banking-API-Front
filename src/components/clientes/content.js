import React from "react";
import lupa from "../../assets/lupa.svg";
import gmail from "../../assets/gmail.svg";
import telefone from "../../assets/telefone.svg";
import editar from "../../assets/editar-cliente.svg";
import { useForm } from "react-hook-form";
import { UseMediaQuery } from "../../utils/mediaQuery";
import { getClients, getClientsSearch } from "./getClients";

export const Content = (props) => {
  const { watch, register } = useForm();
  const { offset } = props;
  const token = localStorage.getItem("token");
  const isPhone = UseMediaQuery("(max-width: 700px)");
  const [inputClicado, setInput] = React.useState({ id: null, valor: false });
  const [clientes, setClientes] = React.useState(null);
  const [clientesProcurados, setClientesProcurados] = React.useState(null);

  const procura = watch("procura");

  React.useEffect(() => {
    if (procura && procura !== "") {
      getClientsSearch(token, offset, procura).then((r) => {
        setClientesProcurados(r);
      });
    } else {
      setClientesProcurados(null);
      getClients(token, offset).then((r) => {
        setClientes(r);
      });
    }
  }, [token, offset, procura]);

  return (
    <div className="divConteudo">
      <div className="bellow-header">
        <button onClick={() => (window.location.href = "/adicionar-cliente")}>
          Adicionar cliente
        </button>
        <form className="input-procurar" onSubmit={(ev) => ev.preventDefault()}>
          <input
            ref={register}
            name="procura"
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
            {(clientesProcurados || clientes) &&
              (clientesProcurados || clientes).map((c) => {
                return (
                  <tr key={c.id}>
                    <td>
                      {!inputClicado.valor && inputClicado.id !== c.id ? (
                        <h2 className="nome-email-cliente">
                          <span>{c.nome}</span>
                        </h2>
                      ) : (
                        <>
                          <span>
                            <input
                              placeholder="Nome do Cliente"
                              className="editar-cliente"
                            />
                          </span>
                        </>
                      )}
                      <div className="descricoes-cliente">
                        {!inputClicado.valor && inputClicado.id !== c.id ? (
                          <>
                            <img src={gmail} alt="email" />
                            <span>{c.email}</span>
                          </>
                        ) : (
                          <input
                            placeholder="Email"
                            className="editar-cliente"
                          />
                        )}
                      </div>
                      <div className="descricoes-cliente">
                        {!inputClicado.valor && inputClicado.id !== c.id ? (
                          <>
                            <img src={telefone} alt="telefone" />
                            <span>{c.tel}</span>
                          </>
                        ) : (
                          <input
                            placeholder="Telefone"
                            className="editar-cliente"
                          />
                        )}
                      </div>
                    </td>
                    <td>R$ {c.cobrancasFeitas}</td>
                    <td>R$ {c.cobrancasRecebidas}</td>
                    {!isPhone && (
                      <td
                        className={
                          c.estaInadimplente ? "inadimplente" : "em-dia"
                        }
                      >
                        {c.estaInadimplente ? "inadimplente" : "em dia"}
                      </td>
                    )}

                    <td>
                      <button
                        onClick={(i) => {
                          setInput({
                            id: c.id,
                            valor: !inputClicado.valor ? true : false,
                          });
                        }}
                      >
                        <img alt="editar cliente" src={editar} />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
