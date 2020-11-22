export const Home = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      {token && token !== "null" ? (
        <div className="colunas">
          <div className="barra-lateral">
            <img alt="logo cubos" src="./images/logo_cubos.svg" />
            <div className="listagem">
              <ul>
                <li>
                  <img alt="home" src="./images/home.svg" />
                  <span className="descricao">Home</span>
                </li>
                <li>
                  <img alt="cobrancas" src="./images/cobrancas.svg" />
                  <span className="descricao">Cobrancas </span>
                </li>
                <li>
                  <img alt="clientes" src="./images/clientes.svg" />
                  <span className="descricao">Clientes</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="conteudo"></div>
        </div>
      ) : (
        (window.location.href = "/")
      )}
    </>
  );
};
