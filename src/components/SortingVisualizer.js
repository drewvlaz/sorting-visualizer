import React, { useState, Fragment, useEffect } from "react";
import { Button } from "reactstrap";
import MergeSort from "./MergeSort";

const NUMBER_OF_BARS = 150;
const ANIMATION_SPEED = 5;
const PRIMARY_COLOR = "#a5afe8";
const SECONDARY_COLOR = "#ff5c5c";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  const genNewArray = () => {
    const array = [];
    for (let i = 0; i < NUMBER_OF_BARS; i++) {
      // Bars of smaller size are hard to see
      array.push(randInt(10, 350));
    }
    setArray(array);
    console.log(array);
  };

  useEffect(() => {
    genNewArray();
  }, []);

  // Sorting algorithm helper functions
  const mergeSort = async () => {
    const animations = MergeSort(array);
    console.log(array);
    for (let i = 0; i < animations.length; i++) {
      const bars = document.getElementsByClassName("array-bar");
      const [barOneIdx, barTwoIdx] = animations[i].compared;
      // setTimeout(() => {
      bars[barOneIdx].style.backgroundColor = SECONDARY_COLOR;
      bars[barTwoIdx].style.backgroundColor = SECONDARY_COLOR;
      // }, i * ANIMATION_SPEED);
      // Moves to next timeout before previous complete
      await sleep(ANIMATION_SPEED);
      // setTimeout(() => {
      const [idx, newHeight] = animations[i].replaced;
      bars[barOneIdx].style.backgroundColor = PRIMARY_COLOR;
      bars[barTwoIdx].style.backgroundColor = PRIMARY_COLOR;
      bars[idx].style.height = `${newHeight}px`;
      // }, i * ANIMATION_SPEED);
    }
  };

  const testSort = () => {
    const arr = [];
    const len = randInt(10, 1000);
    for (let i = 0; i < len; i++) {
      arr.push(randInt(-1000, 1000));
    }
    const jsSortedArr = arr.slice().sort((a, b) => a - b);
    MergeSort(arr);
    console.log(equalArr(jsSortedArr, arr));
  };

  const equalArr = (arrOne, arrTwo) => {
    if (arrOne.length !== arrTwo.length) return false;
    for (let i = 0; i < arrTwo.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        return false;
      }
    }
    return true;
  };

  const randInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <Fragment>
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
        </Button>
        <Button color="success" onClick={() => mergeSort()}>
          Merge Sort
        </Button>
        {/* <Button color="warning" onClick={() => testSort()}>
          Test Sorting
        </Button> */}
      </div>
    </Fragment>
  );
};

export default SortingVisualizer;
