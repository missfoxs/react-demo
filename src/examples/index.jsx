import React, { useMemo, useState } from "react";
import Memo from "./memo";
import TestUseMemo from "./test-use-memo";
import Timeout from "./setTimeout";
import TestUseState from "./test-use-state";
import TestSuspense from "./test-suspense";
import TestReactChild from "./test-react-child";
import TestCreatePortal from "./test-createPortal";
import TestUerRef from "./test-uer-ref";
import TestUseTranstion from "./test-useTranstion";
import TestUseDeferredValue from "./test-useDeferredValue";

// 测试一下git rebase
// 切回master，制造冲突
// 加了一个新分支
function Example() {
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

export default Example;
