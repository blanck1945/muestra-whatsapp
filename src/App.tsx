import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import ActualPage from "./pages/actual";
import LinkPage from "./pages/link";
import Tarjetin from "./pages/tarketin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/tarjetin" component={Tarjetin} />
          <Route exact path="/link" component={LinkPage} />
          <Route exact path="/actual" component={ActualPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

//50416625
