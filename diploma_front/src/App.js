import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./views/Home";
import { About } from "./views/About";
import { NotFound } from "./views/NotFound";
import { Admins } from "./views/Admins";
import { Settings } from "./views/Settings";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" exact element={<Home />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/admin/admins" exact element={<Admins />} />
      <Route path="/admin/settings" exact element={<Settings />} />
    </Routes>
  );
}

export default App;
