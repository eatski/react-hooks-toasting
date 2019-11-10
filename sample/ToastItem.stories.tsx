import React from "react";
import { storiesOf } from "@storybook/react";
import { SimpleToastItem, ColorfulToastItem } from "./ToastItem";
import { useToasting } from "../src/useToasting";
import json from "./messages.json";

storiesOf("useToast", module)
  .add("simple", () => {
    const { renderToast, dispatch } = useToasting(SimpleToastItem, {
      exitingMS: 1000,
      displayMS: 5000
    });
    return (
      <div>
        <button
          className="add-btn"
          onClick={() => dispatch("Toasting!!    @" + new Date().toISOString())}
        >
          Toasting!!
        </button>
        <div className="wrapper">{renderToast()}</div>
      </div>
    );
  })
  .add("colorful", () => {
    const { renderToast, dispatch } = useToasting(ColorfulToastItem, {
      exitingMS: 1000,
      displayMS: 30000
    });
    return (
      <div>
        <button
          className="add-btn"
          onClick={() =>
            dispatch(json[Math.floor(Math.random() * json.length)])
          }
        >
          Toasting!!
        </button>
        <div className="wrapper">{renderToast()}</div>
      </div>
    );
  });
