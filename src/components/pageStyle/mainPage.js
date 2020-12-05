import React from "react";
import { Link } from "react-router-dom";
import "../../pages/main/styles.css";
import logo_cubos_white from "../../assets/logo_cubos_white.svg";
import home from "../../assets/home.svg";
import cobrancas from "../../assets/cobrancas.svg";
import clientes from "../../assets/clientes.svg";
import { UseMediaQuery } from "../../utils/mediaQuery";
import hamburger from "../../assets/hamburger-menu.svg";

export const MainPageStyle = (Page) => {
  const media = UseMediaQuery("(max-width: 1200px)");
  const [menu, setMenu] = React.useState(false);
  const [troca, setTroca] = React.useState(!media);
  const token = localStorage.getItem("token");
  const [, , , url] = `${document.URL}`.split("/");
  return (
    <>
      {token && token !== "null" ? (
        <div
          className="colunas"
          style={media && troca ? { display: "block" } : { display: "flex" }}
        >
          {!media ? (
            <div className="barra-lateral" style={{ position: "sticky" }}>
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
              <button
                onClick={() => (window.location.href = "/criar-cobranca")}
              >
                Criar cobrança
              </button>
            </div>
          ) : (
            <>
              {!menu ? (
                <div className="divHamburguer">
                  <button
                    onClick={() => {
                      setMenu(!menu);
                      setTroca(false);
                    }}
                  >
                    <img alt="menu-hamburguer" src={hamburger} />
                  </button>
                </div>
              ) : (
                <>
                  <div className="barra-lateral">
                    <div className="divHamburguer">
                      <button
                        onClick={() => {
                          setMenu(!menu);
                          setTroca(true);
                        }}
                      >
                        <img alt="menu-hamburguer" src={hamburger} />
                      </button>
                    </div>
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
                        className={
                          url === "cobrancas" ? "li-clicado link" : "link"
                        }
                      >
                        <div className="divImagens">
                          <img alt="cobrancas" src={cobrancas} />
                        </div>
                        <span className="descricao">Cobrancas </span>
                      </Link>

                      <Link
                        to="/clientes"
                        className={
                          url === "clientes" ? "li-clicado link" : "link"
                        }
                      >
                        <div className="divImagens">
                          <img alt="clientes" src={clientes} />
                        </div>
                        <span className="descricao">Clientes</span>
                      </Link>
                    </ul>
                    <button
                      onClick={() => (window.location.href = "/criar-cobranca")}
                    >
                      Criar cobrança
                    </button>
                  </div>
                  <div
                    style={{
                      position: "fixed",
                      zIndex: 5,
                      top: 0,
                      bottom: 0,
                      right: 0,
                      minWidth: "100vw",
                      background: "rgba(0, 0, 0, 0.6)",
                      backdropFilter: "blur(2px)",
                    }}
                  />
                </>
              )}
            </>
          )}
          <Page />
        </div>
      ) : (
        (window.location.href = "/")
      )}
    </>
  );
};
