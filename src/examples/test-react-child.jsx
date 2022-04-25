import React, { useDebugValue, useState } from "react";

const WrapComponent = ({ children }) => {
  // 处理非透明的数据结构（传过来是数组而非组件列表）
  const component = React.Children.map(children, item =>
    React.cloneElement(item, { style: { color: "gray" } })
  );
  console.log(component);
  return component;
};

const useMyCount = () => {
  const [count, setCount] = useState(0);

  useDebugValue(count ? "是" : "否");

  return {
    count,
    setCount,
  };
};

export default () => {
  const { count, setCount } = useMyCount();

  return (
    <>
      <WrapComponent>
        {new Array(3).fill(0).map((item, index) => (
          <div key={index}>HHHH</div>
        ))}
      </WrapComponent>
      <div onClick={() => setCount(count => count + 1)}>{count}</div>
    </>
  );
};
