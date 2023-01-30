import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import PortFolio from "./PortfolioTemplate/portFolio";

function App() {
  return <BrowserRouter >
  <Routes>
    <Route path='/home'></Route>
    <Route path='/template-1' element={<PortFolio />} ></Route>
  </Routes>
  </BrowserRouter>
}

export default App;
