import React, { useState, Fragment, useEffect } from "react";
import { Button } from "reactstrap";

import { randInt, testSort } from "./Helper";
import { NUMBER_OF_BARS } from "./Constants";

import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";
import MergeSort from "./MergeSort";
import QuickSort from "./QuickSort";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

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
  const bubbleSort = () => {
    BubbleSort(array);
    console.log(array);
  };
  const insertionSort = () => {
    InsertionSort(array);
    console.log(array);
  };
  const mergeSort = () => {
    MergeSort(array);
    console.log(array);
  };
  const quickSort = async () => {
    QuickSort(array);
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
          <Button color="danger" onClick={() => genNewArray()}>
            New Array
          </Button>{" "}
          <Button color="success" onClick={() => bubbleSort()}>
            Bubble Sort
          </Button>{" "}
          <Button color="success" onClick={() => insertionSort()}>
            Insertion Sort
          </Button>{" "}
          <Button color="success" onClick={() => mergeSort()}>
            Merge Sort
          </Button>{" "}
          <Button color="success" onClick={() => quickSort()}>
            Quick Sort
          </Button>{" "}
          <Button color="warning" onClick={() => testSort()}>
            Test Sorting
          </Button>{" "}
        </div>
      </div>
    </Fragment>
  );
};

export default SortingVisualizer;
