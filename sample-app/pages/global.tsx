import React from "react";
import { createToastingContainer } from "react-hooks-toasting";
import { SimpleToastItem } from "../components/SimpleToastItem";

const { Container, dispatch } = createToastingContainer(SimpleToastItem, {
  exitingMS: 1000,
  displayMS: 1500
});

function GlobalToastContainer() {
  /* Call 'dispatch' to show toast. */
  const toasting = () => dispatch("Toasting!!");
  return (
    <div>
      <button onClick={toasting}>Toasting!!</button>
      <div>
        <Container />
      </div>
    </div>
  );
}

const Global = () => <GlobalToastContainer />;

export default Global;
