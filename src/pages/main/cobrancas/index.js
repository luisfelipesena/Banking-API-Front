import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import logo_cubos_white from "../../../assets/logo_cubos_white.svg";
import home from "../../../assets/home.svg";
import cobrancas from "../../../assets/cobrancas.svg";
import clientes from "../../../assets/clientes.svg";
import { CriarCobranca } from "../../../components/cobrancas/index";

export const Cobrancas = () => {
  const token = localStorage.getItem("token");
  const [, , , url] = `${document.URL}`.split("/");
  return (
    <>
      {token && token !== "null" ? (
        <div className="colunas">
          <div className="barra-lateral">
            <img
              className="logo-cubos"
              alt="logo cubos"
              src={logo_cubos_white}
            />
            <ul>
              <Link
                to="/home"
                className={url === "home" ? "li-clicado link" : "link"}
              >
                <div className="divImagens">
                  <img alt="home" src={home} />
                </div>
                <span className="descricao">Home</span>
              </Link>

              <Link
                to="/cobrancas"
                className={url === "cobrancas" ? "li-clicado link" : "link"}
              >
                <div className="divImagens">
                  <img alt="cobrancas" src={cobrancas} />
                </div>
                <span className="descricao">Cobrancas </span>
              </Link>

              <Link
                to="/clientes"
                className={url === "clientes" ? "li-clicado link" : "link"}
              >
                <div className="divImagens">
                  <img alt="clientes" src={clientes} />
                </div>
                <span className="descricao">Clientes</span>
              </Link>
            </ul>
            <button>Criar cobrança</button>
          </div>
          <CriarCobranca />
        </div>
      ) : (
        (window.location.href = "/")
      )}
    </>
  );
};
