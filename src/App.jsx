import React, { useMemo, useState } from "react";
import "./App.css";
import Memo from "./examples/memo";
import TestUseMemo from "./examples/test-use-memo";
import Timeout from "./examples/setTimeout";
import TestUseState from "./examples/test-use-state";
import TestSuspense from "./examples/test-suspense";
import TestReactChild from "./examples/test-react-child";
import TestCreatePortal from "./examples/test-createPortal";
import TestUerRef from "./examples/test-uer-ref";
import TestUseTranstion from "./examples/test-useTranstion";

function App() {
  return (
    <>
      {/* <Memo /> */}
      {/* <TestUseMemo /> */}
      {/* <Timeout /> */}
      {/* <TestUseState /> */}
      {/* <TestSuspense /> */}
      {/* <TestReactChild /> */}
      {/* <TestCreatePortal /> */}
      {/* <TestUerRef /> */}
      <TestUseTranstion />
    </>
  );
}

export default App;
