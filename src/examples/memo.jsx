import React, { useCallback, useMemo, useState } from "react";

const Child = React.memo(
  ({ count, step }) => {
    return (
      <div>
        {console.log("CHILD render")} C{count}, s{step}
      </div>
    );
  },
  // 如果第二个参数不传，会比较prevProps和curProps，他们不相等，会返回false，因此这个参数是必加的，除非子组件啥参数也不接受。
  (prevProps, curProps) => {
    // 参数相等返回true, 否则返回false
    console.log("props", prevProps, curProps);
    if (prevProps.step === curProps.step) {
      return true;
    }
    return false;
  }
);

// React.memo会进行参数进行一个浅对比，用useCallback或者useMemo时地址没有变，因此不会重新渲染。
const ChildWithFn = React.memo(({ fn }) => {
  fn();
  return <div>{console.log("CHILD render")}CHILD</div>;
});

export default () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  // 添加useCallback再传给子组件时，props没有变化，因此不会重新渲染。不用加memo的第二个参数
  const fn = useCallback(() => {
    console.log("fn");
  }, []);

  return (
    <div className="App">
      {console.log("APP render")}
      <button type="button" onClick={() => setCount(count => count + 1)}>
        {count}
      </button>
      <button type="button" onClick={() => setStep(step => step + 1)}>
        step{step}
      </button>
      {/* <Child count={count} step={step}></Child> */}
      <ChildWithFn fn={fn} />
    </div>
  );
};
