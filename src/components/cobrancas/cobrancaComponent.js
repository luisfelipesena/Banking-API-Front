import React from "react";
import setaEsquerda from "../../assets/seta-esquerda.svg";
import setaDireita from "../../assets/seta-direita.svg";
import { Header } from "../home/header";
import { Cobrancas } from "./cobrancas";

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const PageCobranca = () => {
  const token = localStorage.getItem("token");
  const [paginaClicada, setPaginaClicada] = React.useState(1);
  const [paginas, setPaginas] = React.useState(pages);
  return (
    <>
      {token ? (
        <div className="conteudo">
          <Header />
          <Cobrancas offset={(paginaClicada - 1) * 10} />
          <div className="clientes-pages">
            <ul>
              <li>
                <button
                  className="seta"
                  onClick={() => setPaginas(paginas.map((p) => p - 10))}
                  disabled={paginas[0] === 1}
                >
                  <img alt="seta esquerda" src={setaEsquerda} />
                </button>
              </li>
              {paginas.map((p, i) => {
                return (
                  <li
                    key={i}
                    className={paginaClicada === p ? "botao-clicado" : ""}
                  >
                    <button
                      onClick={() => {
                        setPaginaClicada(p);
                      }}
                    >
                      {p}
                    </button>
                  </li>
                );
              })}
              <li>
                <button
                  className="seta"
                  onClick={() => setPaginas(paginas.map((p) => p + 10))}
                >
                  <img alt="seta direita" src={setaDireita} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        (window.location.href = "/")
      )}
    </>
  );
};
