import React, { useRef, useState } from "react";
import * as ReactDOM from "react-dom";
import css from "./index.css";
console.log(css);

const Modal = ({ isOpen }) => {
  if (!isOpen) return;
  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        width: 500,
        height: 300,
        border: "1px solid #ccc",
      }}
    >
      <p>title</p>
    </div>,
    document.body
  );
};

// 冒泡事件，即使真实的dom结构是在body下，依然可以使用事件冒泡和useContext等。
export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState('<img src="x" onerror="alert(1)" />');
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div onClick={() => setIsOpen(true)}>open</div>
      <Modal isOpen={isOpen} />
    </>
  );
};
