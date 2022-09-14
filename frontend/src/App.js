import React from "react";
import Main from "./Pages/Main/Main";
import History from "./Pages/History/History";
import { Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Main} />
      <Route exact path="/history" component={History} />
    </div>
  );
}

export default App;
