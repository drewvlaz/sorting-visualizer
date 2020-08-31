import React, { useState, Fragment, useEffect } from "react";
import { Button } from "reactstrap";

const NUMBER_OF_BARS = 100;

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  const resetArray = () => {
    const array = [];
    for (let i = 0; i < NUMBER_OF_BARS; i++) {
      // bars of smaller size are hard to see
      array.push(randInt(10, 250));
    }
    setArray(array);
  };

  useEffect(() => {
    resetArray();
  }, []);

  return (
    <Fragment>
      <div>
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
      <Button color="primary" onClick={() => resetArray()}>
        Reset Array
      </Button>
    </Fragment>
  );
};

const randInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default SortingVisualizer;
