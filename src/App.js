import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import SobreMi from "./pages/SobreMi";
import { HashRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Certificaciones from "./pages/Certificaciones";

function App() {
  return (
    <>
      <Router>
        {/* {Barra de Navegación.} */}
        <NavBar />

        <Route exact path="/">
          <Header />
          <SobreMi />
        </Route>
        <Route exact path="/portfolio">
          <div className="App">
            <Portfolio />
          </div>
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/certificaciones">
          <div className="App">
            <Certificaciones />{" "}
          </div>
        </Route>

        <Footer />
      </Router>
    </>
  );
}

export default App;
