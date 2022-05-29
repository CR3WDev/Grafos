import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./form";
import Kruskal from "./Kruskal";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="" element={<Kruskal />} />
      </Routes>
    </BrowserRouter>
  );
};
