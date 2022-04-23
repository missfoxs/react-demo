import React, { useMemo, useState } from "react";
import "./App.css";
import Memo from "./examples/memo";
import TestUseMemo from "./examples/test-use-memo";
import Timeout from "./examples/setTimeout";
import TestUseState from "./examples/test-use-state";

function App() {
  return (
    <>
      {/* <Memo /> */}
      {/* <TestUseMemo /> */}
      {/* <Timeout /> */}
      <TestUseState />
    </>
  );
}

export default App;
