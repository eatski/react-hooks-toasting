import React from "react";
import { useToasting } from "react-hooks-toasting";
import { SimpleToastItem } from "../components/SimpleToastItem";

function SimpleToastContainer() {
  const { renderToast, dispatch } = useToasting(SimpleToastItem, {
    exitingMS: 1000,
    displayMS: 30000
  });
  /* Call 'dispatch' to show toast. */
  const toasting = () => dispatch("Toasting!!");
  return (
    <div>
      <button onClick={toasting}>Toasting!!</button>
      <div>
        {renderToast() /* 'renderToast' is Function to render toast array. */}
      </div>
    </div>
  );
}

const Home = () => <SimpleToastContainer />;

export default Home;
