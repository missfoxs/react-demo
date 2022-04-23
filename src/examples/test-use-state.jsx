import React, { useState, useReducer } from "react";

const initCount = c => {
  console.log("initCount 执行");
  return c * 2;
};

export default () => {
  // const [count1, setCount1] = useState(initCount(0));
  // const [count2, setCount2] = useState(0);
  // console.log("render");
  // return (
  //   <div>
  //     {count2}
  //     <button
  //       onClick={() => {
  //         // setCount1(count => count + 1);
  //         // setCount2(count => count + 1);
  //         // setCount2(count => count + 2);
  //         setCount1(count1 + 1);
  //         setCount2(count2 + 2);
  //       }}
  //     >
  //       click
  //     </button>
  //   </div>
  // );

  const [count, dispatch] = useReducer((x, payload) => x + payload, 0);
  return (
    <p
      onClick={() => {
        dispatch(1);
        dispatch(2);
      }}
    >
      {console.log("render")}
      clicked {count} times
    </p>
  );
};
