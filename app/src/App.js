import './App.css';

// Pages
import Home from "./pages/about";

// Components
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      
      <Home />

      
      <Footer />
    </div>
  );
}

export default App;
