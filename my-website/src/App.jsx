import React from "react";
import Header from "./components/Header";
import LinksBar from "./components/LinksBar";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
      <LinksBar />
      <Features />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;

