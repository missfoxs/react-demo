import React from "react";
import TestUseMemo from "./test-use-memo";

const ProfilePage1 = React.lazy(() => import("./test-use-state")); // import本身是一个promise

const ProfilePage = React.lazy(
  () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve({
          default: () => <TestUseMemo />,
        });
      }, 2000);
    })
);

export default () => {
  return (
    // 可以放两个异步子组件，并且会在所有的异步组件加载完后再渲染。
    <React.Suspense fallback={<>wating</>}>
      <ProfilePage />
      <ProfilePage1 />
    </React.Suspense>
  );
};
