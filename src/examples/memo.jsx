import React, { useMemo, useState } from "react";

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

export default () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  return (
    <div className="App">
      {console.log("APP render")}
      <button type="button" onClick={() => setCount(count => count + 1)}>
        {count}
      </button>
      <button type="button" onClick={() => setStep(step => step + 1)}>
        step{step}
      </button>
      <Child count={count} step={step}></Child>
    </div>
  );
};
