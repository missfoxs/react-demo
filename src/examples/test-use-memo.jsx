import React, { useMemo, useState } from "react";

export default () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const ChildMemo = useMemo(() => {
    return (
      <>
        {console.log("CHILD render")}
        {count}, {step}
      </>
    );
  }, [count]);

  return (
    <div className="App">
      {console.log("APP render")}
      <button type="button" onClick={() => setCount(count => count + 1)}>
        {count}
      </button>
      <button type="button" onClick={() => setStep(step => step + 1)}>
        step{step}
      </button>
      {ChildMemo}
    </div>
  );
};
