import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "./views/Home";
import { About } from "./views/About";
import { NotFound } from "./views/NotFound";
import { Admins } from "./views/Admins";
import { Settings } from "./views/Settings";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={() => <Home />} />
      <Route path="/about" exact component={() => <About />} />
      <Route path="/admin/admins" exact component={() => <Admins />} />
      <Route path="/admin/settings" exact component={() => <Settings />} />
      <Route path="*" component={() => <NotFound />} />
    </Switch>
  );
}

export default App;
