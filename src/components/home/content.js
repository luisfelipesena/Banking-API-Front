import React from "react";
import clientes from "../../assets/clientes.svg";
import cobrancas from "../../assets/cobrancas.svg";
import faturamento from "../../assets/faturamento.svg";
import { Relatorio } from "./getRelatorios";
import { Token } from "./index";
import { UseMediaQuery } from "../../utils/mediaQuery";
import { TabelaRelatorios } from "./tabelaRelatorios";

export const Content = () => {
  const isPhone = UseMediaQuery("(max-width:500px)");
  const token = Token.useContainer();
  const [temporalidadeGeral, setTemporalidadeGeral] = React.useState("dia");
  const [relatorio, setRelatorio] = React.useState(null);

  React.useEffect(() => {
    setRelatorio(null);
    Relatorio(token, temporalidadeGeral).then((r) => {
      setRelatorio(r);
    });
  }, [token, temporalidadeGeral]);

  return (
    <div className="divConteudo">
      <div
        className="temporalidades"
        style={
          isPhone
            ? { flexFlow: "column wrap", alignItems: "center" }
            : { border: 0 }
        }
      >
        <button
          onClick={() => setTemporalidadeGeral("dia")}
          className={
            temporalidadeGeral === "dia" ? "temporalidade-escolhida" : ""
          }
        >
          <span>Este dia</span>
        </button>
        <button
          onClick={() => setTemporalidadeGeral("mes")}
          className={
            temporalidadeGeral === "mes" ? "temporalidade-escolhida" : ""
          }
        >
          <span>Este mês</span>
        </button>
        <button
          onClick={() => setTemporalidadeGeral("ano")}
          className={
            temporalidadeGeral === "ano" ? "temporalidade-escolhida" : ""
          }
        >
          <span>Este ano</span>
        </button>
        <button
          onClick={() => setTemporalidadeGeral("sempre")}
          className={
            temporalidadeGeral === "sempre" ? "temporalidade-escolhida" : ""
          }
        >
          <span>Desde o início</span>
        </button>
      </div>

      <div className="divBlocks">
        <div className="clientes">
          <div className="header-clientes">
            <img alt="clientes" src={clientes} />
            <h2>Clientes</h2>
          </div>
          <div className="relatorio-clientes">
            <div className="verde">
              <span>Em dia</span>
              <h2>{relatorio ? relatorio.qtdClientesAdimplentes : "..."}</h2>
            </div>
            <div className="vermelho">
              <span>Inadimplentes</span>
              <h2>{relatorio ? relatorio.qtdClientesInadimplentes : "..."}</h2>
            </div>
          </div>
        </div>

        <div className="cobrancas">
          <div className="header-cobrancas">
            <img alt="cobrancas" src={cobrancas} />
            <h2>Cobrancas</h2>
          </div>
          <div className="relatorio-cobrancas">
            <div className="azul">
              <span>Previstas</span>
              <h2>{relatorio ? relatorio.qtdCobrancasPrevistas : "..."}</h2>
            </div>
            <div className="vermelho">
              <span>Vencidas</span>
              <h2>{relatorio ? relatorio.qtdCobrancasVencidas : "..."}</h2>
            </div>
            <div className="verde">
              <span>Pagas </span>
              <h2>{relatorio ? relatorio.qtdCobrancasPagas : "..."}</h2>
            </div>
          </div>
        </div>

        <div className="faturamento">
          <div className="header-faturamento">
            <img alt="faturamento" src={faturamento} />
            <h2>Faturamento</h2>
          </div>

          <div className="faturamento-content">
            <TabelaRelatorios data={"faturamento por mes"} />
          </div>
        </div>
      </div>
    </div>
  );
};
