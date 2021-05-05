import './App.css';

// Pages
import Home from "./pages/about";
import Works from "./pages/works";
import Contact from "./pages/contact";

// Components
import Header from "./components/header";
import Footer from "./components/footer";

// Nav hash link router
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <div className="mainContent">
          <Switch>
            <Route path="/about">
              <Home />
            </Route>
            <Route path="/works">
              <Works />
            </Route>
            <Route path="/" exact>
              <Home />
              <Works />
              <Contact />
            </Route>
          </Switch>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
