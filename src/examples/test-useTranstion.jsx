import React, { useState, useTransition } from "react";
import { fakeNames as names } from "../js/faker-name";

function ListItem({ name, highlight }) {
  const index = name.toLowerCase().indexOf(highlight.toLowerCase());
  if (index === -1) {
    return <div>{name}</div>;
  }
  return (
    <div>
      {name.slice(0, index)}
      <span className="highlight">
        {name.slice(index, index + highlight.length)}
      </span>
      {name.slice(index + highlight.length)}
    </div>
  );
}

export default function FilterList() {
  const [query, setQuery] = useState("");
  const [highlight, setHighlight] = useState("");

  const [isPending, startTransition] = useTransition();

  const changeHandler = ({ target: { value } }) => {
    setQuery(value);
    startTransition(() => setHighlight(value)); // 把跟highlight相关的渲染延时执行
  };

  return (
    <div>
      <input onChange={changeHandler} value={query} type="text" />
      {isPending
        ? "pending"
        : names.map((name, i) => (
            <ListItem key={i} name={name} highlight={highlight} />
          ))}
    </div>
  );
}
