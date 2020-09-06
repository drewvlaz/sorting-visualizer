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
  const bubbleSort = async () => {
    // For some reason if no await for set animation, application immediately
    // shows sorted bars
    await setAnimationComplete(false);
    await BubbleSort(array);
    console.log(array);
    setAnimationComplete(true);
  };
  const insertionSort = async () => {
    await setAnimationComplete(false);
    await InsertionSort(array);
    console.log(array);
    setAnimationComplete(true);
  };
  const mergeSort = async () => {
    await setAnimationComplete(false);
    await MergeSort(array);
    console.log(array);
    setAnimationComplete(true);
  };
  const quickSort = async () => {
    await setAnimationComplete(false);
    await QuickSort(array);
    console.log(array);
    setAnimationComplete(true);
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
            onClick={() => bubbleSort()}
          >
            Bubble Sort
          </Button>{" "}
          <Button
            color="success"
            disabled={!animationComplete}
            onClick={() => insertionSort()}
          >
            Insertion Sort
          </Button>{" "}
          <Button
            color="success"
            disabled={!animationComplete}
            onClick={() => mergeSort()}
          >
            Merge Sort
          </Button>{" "}
          <Button
            color="success"
            disabled={!animationComplete}
            onClick={() => quickSort()}
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
