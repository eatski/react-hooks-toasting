import React from "react";
import { storiesOf } from "@storybook/react";
import { SimpleToastItem, ColorfulToastItem } from "./ToastItem";
import { useToasting } from "../src/useToasting";
import json from "./messages.json";

const SimpleMessage = () => {
  const { renderToast, dispatch } = useToasting(SimpleToastItem, {
    exitingMS: 1000,
    displayMS: 30000
  });
  /* Call 'dispatch' to show toast. */
  const toasting = () => dispatch("Toasting!!");
  return (
    <div>
      <button className="add-btn" onClick={toasting}>
        Toasting!!
      </button>
      <div className="toast-wrapper">
        {renderToast() /* 'renderToast' is Function to render toast array. */}
      </div>
    </div>
  );
};

const ColorfulMessage = () => {
  const { renderToast, dispatch } = useToasting(ColorfulToastItem, {
    exitingMS: 1000,
    displayMS: 30000
  });
  const toasting = () =>
    dispatch(json[Math.floor(Math.random() * json.length)]);
  return (
    <div>
      <button className="add-btn" onClick={toasting}>
        Toasting!!
      </button>
      <div className="toast-wrapper">{renderToast()}</div>
    </div>
  );
};

storiesOf("useToasting", module)
  .add("SimpleMessage", SimpleMessage)
  .add("ColorfulMessage", ColorfulMessage);
