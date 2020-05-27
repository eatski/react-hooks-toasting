import React from "react";
import { useToasting } from "react-hooks-toasting";
import { ColorfulToastItem } from "../components/ColorfulToastItem";
import json from "../json/sample.json";

const ColorfulToastContainer = () => {
  const { renderToast, dispatch } = useToasting(ColorfulToastItem, {
    exitingMS: 1000,
    displayMS: 3000
  });
  const toasting = () =>
    dispatch(json[Math.floor(Math.random() * json.length)]);
  return (
    <div>
      <button onClick={toasting}>Toasting!!</button>
      <div>{renderToast()}</div>
    </div>
  );
};

const Colorful = () => <ColorfulToastContainer />;

export default Colorful;
