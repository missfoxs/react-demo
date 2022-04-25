import React, { useMemo, useState } from "react";
import "./App.css";
import Memo from "./examples/memo";
import TestUseMemo from "./examples/test-use-memo";
import Timeout from "./examples/setTimeout";
import TestUseState from "./examples/test-use-state";
import TestSuspense from "./examples/test-suspense";
import TestReactChild from "./examples/test-react-child";

function App() {
  return (
    <>
      {/* <Memo /> */}
      {/* <TestUseMemo /> */}
      {/* <Timeout /> */}
      {/* <TestUseState /> */}
      {/* <TestSuspense /> */}
      <TestReactChild />
    </>
  );
}

export default App;
