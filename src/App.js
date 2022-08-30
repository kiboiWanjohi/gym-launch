import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Trainers from "./components/Trainers";
import Pricing from "./components/Pricing";
import Location from "./components/Location";
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Header />
        <Trainers />
        <Pricing />
        <Location />
      </div>
    </Router>
  );
}
export default App;
