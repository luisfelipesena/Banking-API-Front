import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "./pages/login-cadastro/login/index";
import { Cadastro } from "./pages/login-cadastro/cadastro/index";
import { EsqueciSenha } from "./pages/login-cadastro/esqueci-senha/index";
import { Home } from "./pages/main/home/index";
import { Cobrancas } from "./pages/main/cobrancas";
import { Clientes } from "./pages/main/clientes/clientes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="all">
          <Route exact path="/" component={Login} />
          <Route exact path="/cadastro" component={Cadastro} />
          <Route exact path="/esqueci-senha" component={EsqueciSenha} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/cobrancas" component={Cobrancas} />
          <Route exact path="/clientes" component={Clientes} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
