import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

// 指定额外运行时？
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

const color = "white";
const width = 400;

export default function () {
  const [info, setInfo] = useState({
    name: "tom",
    password: "123456",
  });
  const handleSubmit = event => {
    event.preventDefault();
    // console.log(event, event.target[0].value);
    console.log(info);
  };
  return (
    <div
      css={{
        margin: "10px",
        width,
      }}
    >
      <form
        css={{
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          required
          id="name"
          label="用户名"
          variant="outlined"
          onChange={e => setInfo({ ...info, name: e.target.value })}
        />
        <TextField
          required
          id="password"
          label="密码"
          variant="outlined"
          onChange={e => setInfo({ ...info, password: e.target.value })}
        />
        <Button type="submit" variant="contained">
          login
        </Button>
      </form>
    </div>
  );
}
