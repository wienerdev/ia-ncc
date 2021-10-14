import { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import "./app.scss";
import Menu from "./components/menu/Menu";
import Concepts from "./components/home/concepts/Concepts";
import Codes from "./components/home/codes/Codes";
import Intro from "./components/home/intro/Intro";
import Subscription from "./components/home/subscription/Subscription";
import Imageption from "./components/home/imageption/Imageption";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <Router>
      <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Switch>
          <Route path="/" exact>
            <Intro />
          </Route>
          <Route path="/concepts">
            <Concepts />
          </Route>
          <Route path="/codes">
            <Codes />
          </Route>
          <Route path="/imageption">
            <Imageption />
          </Route>
        </Switch>
        <Subscription />
      </div>
    </Router>
  );
}

export default App;