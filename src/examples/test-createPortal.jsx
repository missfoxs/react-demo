import React, { useRef, useState } from "react";
import * as ReactDOM from "react-dom";

function WrapComponent({ children }) {
  const domRef = useRef(null);
  const [PortalComponent, setPortalComponent] = useState(null);
  React.useEffect(() => {
    setPortalComponent(ReactDOM.createPortal(children, domRef.current));
  }, []);
  return (
    <div>
      <div className="container" ref={domRef}>
        container
      </div>
      {PortalComponent}
    </div>
  );
}

// TODO:冒泡事件
// TODO:modal组件添加
export default () => {
  return (
    <WrapComponent>
      <div onClick={e => {}}>children compoent</div>
    </WrapComponent>
  );
};
