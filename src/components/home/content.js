import React from "react";
import clientes from "../../assets/clientes.svg";
import cobrancas from "../../assets/cobrancas.svg";
import faturamento from "../../assets/faturamento.svg";

export const Content = () => {
  const [temporalidadeGeral, setTemporalidadeGeral] = React.useState("mes");
  const [
    temporalidadeFaturamento,
    setTemporalidadeFaturamento,
  ] = React.useState("mes");
  return (
    <div className="divConteudo">
      <div className="temporalidades">
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
              <h2>0</h2>
            </div>
            <div className="vermelho">
              <span>Inadimplentes</span>
              <h2>0</h2>
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
              <h2>0</h2>
            </div>
            <div className="vermelho">
              <span>Vencidas</span>
              <h2>0</h2>
            </div>
            <div className="verde">
              <span>Pagas </span>
              <h2>0</h2>
            </div>
          </div>
        </div>

        <div className="faturamento">
          <div className="header-faturamento">
            <img alt="faturamento" src={faturamento} />
            <h2>Faturamento</h2>
          </div>

          <div className="faturamento-content">
            <div className="temporalidades">
              <button
                onClick={() => setTemporalidadeFaturamento("mes")}
                className={
                  temporalidadeFaturamento === "mes"
                    ? "temporalidade-escolhida"
                    : ""
                }
              >
                <span>Por mês</span>
              </button>
              <button
                onClick={() => setTemporalidadeFaturamento("dia")}
                className={
                  temporalidadeFaturamento === "dia"
                    ? "temporalidade-escolhida"
                    : ""
                }
              >
                <span>Por dia </span>
              </button>
            </div>

            {/* Gráfico */}
          </div>
        </div>
      </div>
    </div>
  );
};
