import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Events from "./components/Events";
import Team from "./components/Team";
import Domain from "./components/Domain";
import About from "./components/About";
import Footer from "./components/Footer";
import Login from "./components/Login"; 
import '@fortawesome/fontawesome-free/css/all.css';
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Domain />
      <Events />
      <Login /> 
      <About />
      <Team />
      <Footer />
    </div>
  );
}

export default App;



