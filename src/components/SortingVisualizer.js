import React, { useState, Fragment, useEffect } from "react";
import { Button } from "reactstrap";

import { randInt } from "./Helper";
import { NUMBER_OF_BARS } from "./Constants";

import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";
import MergeSort from "./MergeSort";
import QuickSort from "./QuickSort";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [animationComplete, setAnimationComplete] = useState(true);

  const genNewArray = () => {
    const array = [];
    for (let i = 0; i < NUMBER_OF_BARS; i++) {
      // Bars of smaller size are hard to see
      array.push(randInt(10, 450));
    }
    setArray(array);
    console.log(array);
  };

  useEffect(() => {
    genNewArray();
  }, []);

  // Sorting algorithm animation functions
  const sort = async (algorithm) => {
    // For some reason if no await for set animation, application immediately
    // shows sorted bars
    await setAnimationComplete(false);
    switch (algorithm) {
      case "BubbleSort":
        await BubbleSort(array);
        break;
      case "InsertionSort":
        await InsertionSort(array);
        break;
      case "MergeSort":
        await MergeSort(array);
        break;
      case "QuickSort":
        await QuickSort(array);
        break;
      default:
        return;
    }
    setAnimationComplete(true);
    console.log(array);
  };

  return (
    <Fragment>
      <div className="container mt-3">
        <div className="m-2">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{ height: `${value}px` }}
            ></div>
          ))}
        </div>
        <div className="m-2">
          <Button
            color="danger"
            disabled={!animationComplete}
            onClick={() => genNewArray()}
          >
            New Array
          </Button>{" "}
          <Button
            color="success"
            disabled={!animationComplete}
            onClick={() => sort("BubbleSort")}
          >
            Bubble Sort
          </Button>{" "}
          <Button
            color="success"
            disabled={!animationComplete}
            onClick={() => sort("InsertionSort")}
          >
            Insertion Sort
          </Button>{" "}
          <Button
            color="success"
            disabled={!animationComplete}
            onClick={() => sort("MergeSort")}
          >
            Merge Sort
          </Button>{" "}
          <Button
            color="success"
            disabled={!animationComplete}
            onClick={() => sort("QuickSort")}
          >
            Quick Sort
          </Button>{" "}
          {/* <Button color="warning" onClick={() => testSort()}>
            Test Sorting
          </Button>{" "} */}
        </div>
      </div>
    </Fragment>
  );
};

export default SortingVisualizer;
