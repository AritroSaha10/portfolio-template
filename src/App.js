import './App.css';

// Pages
import Home from "./pages/about";
import Works from "./pages/works";

// Components
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="mainContent">
        <Home />
        <Works />
      </div>

      <Footer />
    </div>
  );
}

export default App;
