import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

// 指定额外运行时？
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import * as style from "./style";

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
    <div css={style.loginWrap}>
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
        {/* 时间相关 */}
        <div>
          <label htmlFor="time">输入日期和时间</label>
          <input
            id="time"
            type="datetime-local"
            name="time"
            min="2022-05-01T10:30"
            max="2022-05-03T10:30"
          />
        </div>
        {/* accentColor: 修改原生单选，多选的颜色 */}
        <div>
          <input type="radio" style={{ accentColor: "red" }} />
          <input type="checkbox" style={{ accentColor: "orange" }} />
        </div>
        {/* image lazy loading，浏览器原生支持图片懒加载了。 */}
        <div>
          <img
            src="https://picsum.photos/id/1/300/800"
            alt="pic"
            width={300}
            height={800}
            loading="lazy"
          />
        </div>
        <Button type="submit" variant="contained">
          login
        </Button>
      </form>
    </div>
  );
}
