import Header from "./components/header/Header";
import Hero from "./components/hero/Hero.jsx";
import "./App.css";
import Companies from "./components/Companies/Companies.jsx";
import Residencies from "./components/Residencies/Residencies.jsx";

const App = () => {
  return (
    <div className="App">
      <div>
      <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
    </div>
  );
};

export default App;
