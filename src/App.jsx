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

function App() {
  console.log(<TestUseDeferredValue />);
  console.log((<TestUseDeferredValue />).type);

  const getData = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(1000);
      }, 2000);
    });
  };

  const importFn = async () => {
    const res = await getData();
    return res;
  };
  importFn().then(res => {
    console.log(res);
  });
  
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
      {/* <TestUseDeferredValue /> */}
    </>
  );
}

export default App;
