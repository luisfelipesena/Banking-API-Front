import React from "react";
import clientes from "../../assets/clientes.svg";
import cobrancas from "../../assets/cobrancas.svg";
import faturamento from "../../assets/faturamento.svg";

export const Content = () => {
  const [temporalidade, setTemporalidade] = React.useState("mes");
  return (
    <div className="divConteudo">
      <div className="temporalidades">
        <button
          onClick={() => setTemporalidade("mes")}
          className={temporalidade === "mes" ? "temporalidade-escolhida" : ""}
        >
          <span>Este mês</span>
        </button>
        <button
          onClick={() => setTemporalidade("ano")}
          className={temporalidade === "ano" ? "temporalidade-escolhida" : ""}
        >
          <span>Este ano</span>
        </button>
        <button
          onClick={() => setTemporalidade("sempre")}
          className={
            temporalidade === "sempre" ? "temporalidade-escolhida" : ""
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
            <div className="em-dia">
              <span>Em dia</span>
              <h2>0</h2>
            </div>
            <div className="inadimplentes">
              <span>inadimplentes</span>
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
            <div className="em-dia">
              <span>Em dia</span>
              <h2>0</h2>
            </div>
            <div className="inadimplentes">
              <span>inadimplentes</span>
              <h2>0</h2>
            </div>
          </div>
        </div>

        <div className="faturamento">
          <div className="header-faturamento">
            <img alt="faturamento" src={faturamento} />
            <h2>Faturamento</h2>
          </div>
          <div className="relatorio-faturamento">
            <div className="em-dia">
              <span>Em dia</span>
              <h2>0</h2>
            </div>
            <div className="inadimplentes">
              <span>inadimplentes</span>
              <h2>0</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
