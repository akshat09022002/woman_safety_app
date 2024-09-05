// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PanicLoader from "./components/PanicLoader";
import AlertOptions from "./components/AlertOptions";
import ParentsOptions from "./components/ParentsOptions";
import WomenLaws from "./components/WomenLaws";
import LawDetail from "./components/LawDetail";
import SelfDefence from "./components/SelfDefence";
import LocationOptions from "./components/LocationOptions";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/alert-options" element={<AlertOptions />} />
        <Route path="/parents-options" element={<ParentsOptions />} />
        <Route path="/women-laws" element={<WomenLaws />} />
        <Route path="/law-detail/:law" element={<LawDetail />} />
        <Route path="/self-defence" element={<SelfDefence />} />
        <Route path="/location-options" element={<LocationOptions />} />
        <Route path="/panic-loader" element={<PanicLoader />} />
      </Routes>
    </Router>
  );
}

export default App;
