import React from "react";
import { storiesOf } from "@storybook/react";

import { useToasting, PropsToastReceives } from "../src/useToasting";

const Toast: React.FC<PropsToastReceives> = ({
  body,
  status,
  remove,
  position
}) => (
  <div
    onClick={remove}
    className={`toast ${status}`}
    style={{ top: position * 50 }}
  >
    Toast {body}
  </div>
);
storiesOf("useToast", module).add("sample", () => {
  const { renderToast, dispatch } = useToasting(Toast, {
    exitingMS: 1000,
    displayMS: 10000
  });
  return (
    <div className="App">
      <button
        className="add-btn"
        onClick={() => dispatch(new Date().toISOString())}
      >
        add
      </button>
      <div className="wrapper">{renderToast()}</div>
    </div>
  );
});
