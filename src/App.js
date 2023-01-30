import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortFolio from "./PortfolioTemplate/portFolio";

function App() {
  return <BrowserRouter >
  <Routes>
    <Route path='/'></Route>
    <Route path='/template-1' element={<PortFolio />} ></Route>
  </Routes>
  </BrowserRouter>
}

export default App;
