import React, { useDeferredValue, useState } from "react";
import { fakeNames as names } from "../js/faker-name";
import { ListItem } from "./test-useTranstion";

export default () => {
  const [query, setQuery] = useState("");

  const highlight = useDeferredValue(query);

  const changeHandler = ({ target: { value } }) => {
    setQuery(value);
    // startTransition(() => setHighlight(value)); // 把跟highlight相关的渲染延时执行
  };

  return (
    <>
      <input onChange={changeHandler} value={query} type="text" />
      {names.map((name, i) => (
        <ListItem key={i} name={name} highlight={highlight} />
      ))}
    </>
  );
};
