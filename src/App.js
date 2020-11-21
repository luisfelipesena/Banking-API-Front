import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={<div>Hello</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
