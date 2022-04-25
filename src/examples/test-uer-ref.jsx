import React, { useEffect, useRef } from "react";

export default () => {
  const ref = useRef();
  console.log(ref.current);
  useEffect(() => {
    console.log(ref.current);
  }, []);
  return (
    <>
      <div ref={ref} onClick={e => console.log(ref.current)}>
        ref
      </div>
    </>
  );
};
