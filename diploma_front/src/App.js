import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./views/Home";
import { About } from "./views/About";
import { NotFound } from "./views/NotFound";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" exact element={<Home />} />
      <Route path="/about" exact element={<About />} />
    </Routes>
  );
}

export default App;
