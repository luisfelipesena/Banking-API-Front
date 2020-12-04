import { Header } from "./header";
import React from "react";
import { Content } from "./content";
import { createContainer } from "unstated-next";

export const Token = createContainer(() => localStorage.getItem("token"));

export const Main = () => {
  return (
    <Token.Provider>
      <div className="conteudo">
        <Header />
        <Content />
      </div>
    </Token.Provider>
  );
};
