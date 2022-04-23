import React, { useEffect, useState } from "react";

export default () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count => count + 1);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div>count: {count}</div>
      <div onClick={() => setCount(count => count + 1)}>click</div>
    </>
  );
};
