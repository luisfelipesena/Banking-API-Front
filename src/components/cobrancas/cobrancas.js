import React from "react";
import lupa from "../../assets/lupa.svg";
import impressao from "../../assets/impressao.svg";
import { useForm } from "react-hook-form";
import { UseMediaQuery } from "../../utils/mediaQuery";
import { getCobrancas, getCobrancasSearch } from "./getCobrancas";
import { realizarPagamento } from "./realizarPagamento";
import statusPago from "../../assets/status-pago.svg";
import statusPendente from "../../assets/status-pendente.svg";

export const Cobrancas = (props) => {
  const { watch, register } = useForm();
  const token = localStorage.getItem("token");
  const { offset } = props;
  const isPhone = UseMediaQuery("(max-width: 800px)");
  const [cobrancas, setCobrancas] = React.useState(null);
  const [cobrancasProcuradas, setCobrancasProcuradas] = React.useState(null);
  const [pay, setPay] = React.useState(null);

  const procura = watch("procura");

  React.useEffect(() => {
    if (procura && procura !== "") {
      getCobrancasSearch(token, offset, procura).then((r) => {
        setCobrancasProcuradas(r.sort((a, b) => a.id - b.id));
      });
    } else {
      setCobrancasProcuradas(null);
      getCobrancas(token, offset).then((r) =>
        setCobrancas(r.sort((a, b) => a.id - b.id))
      );
    }
  }, [token, offset, procura, pay]);

  return (
    <div className="divConteudo">
      <div className="bellow-header" style={{ justifyContent: "flex-end" }}>
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
              {!isPhone && <th>Descrição</th>}
              <th>Valor</th>
              {!isPhone && <th>Status</th>}
              {!isPhone && <th>Vencimento</th>}
              {!isPhone && <th>Boleto</th>}
            </tr>
          </thead>

          <tbody>
            {(cobrancasProcuradas || cobrancas) &&
              (cobrancasProcuradas || cobrancas).map((c) => {
                const link = c.link_do_boleto;
                return (
                  <tr key={c.id}>
                    <td>
                      <h2 className="nome-email-cliente">
                        {c.nome_do_cliente}
                      </h2>
                    </td>
                    {!isPhone && <td>{c.descricao}</td>}
                    <td>R$ {Number(c.valor / 100).toLocaleString("pt-BR")}</td>
                    {!isPhone && (
                      <td
                        className={
                          c.status === "pago"
                            ? "pago"
                            : c.status === "aguardando"
                            ? "aguardando"
                            : "vencido"
                        }
                      >
                        {c.status === "pago" ? (
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <img alt="pago" src={statusPago} />
                            <span>pago</span>
                          </div>
                        ) : c.status === "aguardando" ? (
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <img alt="aguardando" src={statusPendente} />
                            <span>aguardando</span>
                          </div>
                        ) : (
                          "vencido"
                        )}
                      </td>
                    )}
                    {!isPhone && <td>{c.vencimento}</td>}
                    {!isPhone && (
                      <td
                        style={{ cursor: "pointer" }}
                        onClick={async () => {
                          const request = realizarPagamento(token, c.id);
                          if (request) {
                            setPay(true);
                            window.open(link);
                          }
                        }}
                      >
                        <img alt="impressão" src={impressao} />
                      </td>
                    )}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
