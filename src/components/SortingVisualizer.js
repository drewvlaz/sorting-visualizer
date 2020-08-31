import React, { useState, Fragment, useEffect } from "react";

const NUMBER_OF_BARS = 250;

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  const resetArray = () => {
    const array = [];
    for (let i = 0; i < NUMBER_OF_BARS; i++) {
      array.push(randInt(5, 500));
    }
    setArray(array);
  };

  useEffect(() => {
    resetArray();
  }, []);

  return (
    <Fragment>
      {array.map((value, idx) => (
        <div className="array-bar" key={idx}>
          {value}
        </div>
      ))}
    </Fragment>
  );
};

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;
