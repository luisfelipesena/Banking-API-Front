import { Header } from "../home/header";
import { Cobrancas } from "./cobrancas";

export const PageCobranca = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      {token ? (
        <div className="conteudo">
          <Header />
          <Cobrancas />
        </div>
      ) : (
        (window.location.href = "/")
      )}
    </>
  );
};
