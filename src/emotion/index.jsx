import { useMemo, useState } from "react";
// /** @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx, css, ThemeProvider, useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const white = "white";
// 基础样式
const baseStyle = {
  fontSize: 24,
};

// 主题
const defaultTheme = {
  fontSize: 16,
  backgroundColor: "#eee",
};

// 使用Styled模式，还可以传递参数
const Button = styled.button`
  ${baseStyle};
  color: ${props => (props.primary ? "red" : "blue")};
`;

// styled也可以使用object形式。
const Controller = styled.div(
  { ...baseStyle },
  {
    color: "red",
  },
  props => ({
    color: props.color,
  })
);

// 子组件
const ChildComponent = () => {
  const theme = useTheme();
  return (
    <div
      css={{
        color: theme.backgroundColor,
      }}
    >
      child Component
    </div>
  );
};

export default function () {
  // css使用Object类型
  const cssObject = useMemo(
    () => (
      <div
        css={{
          backgroundColor: "hotpink",
          "&:hover": {
            color: "lightgreen",
          },
        }}
      >
        css-object.{" "}
      </div>
    ),
    []
  );

  // css使用string类型
  const cssString = useMemo(
    () => (
      <div
        css={css`
          ${baseStyle};
          background-color: blue;
          color: ${white};
        `}
      >
        css-string.{" "}
      </div>
    ),
    []
  );

  const [theme, setTheme] = useState(defaultTheme);
  return (
    <>
      <ThemeProvider theme={theme}>
        {cssObject}
        {cssString}
        <Button primary>styled button</Button>
        <Controller color="blue">styled object</Controller>
        <div css={theme => ({ backgroundColor: theme.backgroundColor })}>
          children
        </div>
        <ChildComponent />
        <button onClick={() => setTheme({ ...theme, backgroundColor: "pink" })}>
          change Theme Pink
        </button>
      </ThemeProvider>
    </>
  );
}
