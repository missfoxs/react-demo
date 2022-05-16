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
import TestUseDeferredValue from "./examples/test-useDeferredValue";

// 测试一下git rebase
// 切回master，制造冲突
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
      {/* <TestUseTranstion /> */}
      <TestUseDeferredValue />
    </>
  );
}

export default App;
