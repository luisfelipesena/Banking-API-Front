import React from "react";
import "../styles.css";
import logo_cubos_white from "../../../assets/logo_cubos_white.svg";
import home from "../../../assets/home.svg";
import cobrancas from "../../../assets/cobrancas.svg";
import clientes from "../../../assets/clientes.svg";
import { Main } from "../../../components/home/index";

export const Home = () => {
  const token = localStorage.getItem("token");
  const [itemClicado, setItemClicado] = React.useState("home");
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
              <li
                className={itemClicado === "home" ? "li-clicado" : ""}
                onClick={() => {
                  setItemClicado("home");
                }}
              >
                <div className="divImagens">
                  <img alt="home" src={home} />
                </div>
                <span className="descricao">Home</span>
              </li>

              <li
                className={itemClicado === "cobrancas" ? "li-clicado" : ""}
                onClick={() => {
                  setItemClicado("cobrancas");
                }}
              >
                <div className="divImagens">
                  <img alt="cobrancas" src={cobrancas} />
                </div>
                <span className="descricao">Cobrancas </span>
              </li>

              <li
                className={itemClicado === "clientes" ? "li-clicado" : ""}
                onClick={() => {
                  setItemClicado("clientes");
                }}
              >
                <div className="divImagens">
                  <img alt="clientes" src={clientes} />
                </div>
                <span className="descricao">Clientes</span>
              </li>
            </ul>
            <button>Criar cobrança</button>
          </div>
          <Main />
        </div>
      ) : (
        (window.location.href = "/")
      )}
    </>
  );
};
