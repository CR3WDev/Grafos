import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Form } from "./form";
import Kruskal from "./Kruskal";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/kruskal" element={<Kruskal />} />
      </Routes>
    </BrowserRouter>
  );
};
