import { useState } from "react";
import "./App.scss";

import AgeCalculator from "./components/ageCalculator";

function App() {
  return (
    <div className="App">
      <main>
        <AgeCalculator />
      </main>
    </div>
  );
}

export default App;
