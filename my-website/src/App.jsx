import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./pages/Contact";
import Hobbies from "./pages/Hobbies/Hobbies";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </div>
  );
}

export default App;

