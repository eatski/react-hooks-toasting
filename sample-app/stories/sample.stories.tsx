import React from "react";
import { storiesOf } from "@storybook/react";
import { SimpleToastItem } from "./components/SimpleToastItem";
import { ColorfulToastItem } from "./components/ColorfulToastItem";
import { useToasting } from "react-hooks-toasting";
import json from "./sample.json";

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
    displayMS: 3000
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
