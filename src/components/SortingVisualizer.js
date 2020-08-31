import React, { useState, Fragment, useEffect } from "react";
import { Button } from "reactstrap";
import MergeSort from "./MergeSort";
import BubbleSort from "./BubbleSort";

const NUMBER_OF_BARS = 150;
const ANIMATION_SPEED = 5;
const PRIMARY_COLOR = "#a5afe8";
const SECONDARY_COLOR = "#ff5c5c";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [animate, setAnimate] = useState(true);

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

  // Sorting algorithm animation functions
  const bubbleSort = async () => {
    const animations = BubbleSort(array);
    console.log(array);
    for (let i = 0; i < animations.length; i++) {
      const bars = document.getElementsByClassName("array-bar");
      const [barOneIdx, barTwoIdx] = animations[i].compared;
      const barOneStyle = bars[barOneIdx].style;
      const barTwoStyle = bars[barTwoIdx].style;
      barOneStyle.backgroundColor = SECONDARY_COLOR;
      barTwoStyle.backgroundColor = SECONDARY_COLOR;
      // setTimeout() failed to work here - color would switch back instantly
      await sleep(ANIMATION_SPEED);
      const swapped = animations[i].swapped;
      if (swapped.length !== 0) {
        const [barOneHeight, barTwoHeight] = swapped;
        barOneStyle.height = `${barTwoHeight}px`;
        barTwoStyle.height = `${barOneHeight}px`;
      }
      barOneStyle.backgroundColor = PRIMARY_COLOR;
      barTwoStyle.backgroundColor = PRIMARY_COLOR;
    }
  };

  const mergeSort = async () => {
    const animations = MergeSort(array);
    console.log(array);
    for (let i = 0; i < animations.length; i++) {
      const bars = document.getElementsByClassName("array-bar");
      const [barOneIdx, barTwoIdx] = animations[i].compared;
      const barOneStyle = bars[barOneIdx].style;
      const barTwoStyle = bars[barTwoIdx].style;
      barOneStyle.backgroundColor = SECONDARY_COLOR;
      barTwoStyle.backgroundColor = SECONDARY_COLOR;
      // setTimeout() failed to work here - color would switch back instantly
      await sleep(ANIMATION_SPEED);
      const [idx, newHeight] = animations[i].replaced;
      barOneStyle.backgroundColor = PRIMARY_COLOR;
      barTwoStyle.backgroundColor = PRIMARY_COLOR;
      bars[idx].style.height = `${newHeight}px`;
    }
  };

  const quickSort = async () => {};

  const testSort = () => {
    const arr = [];
    const len = randInt(10, 1000);
    for (let i = 0; i < len; i++) {
      arr.push(randInt(-1000, 1000));
    }
    const jsSortedArr = arr.slice().sort((a, b) => a - b);
    BubbleSort(arr);
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
      <div className="container mt-5">
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
          <Button color="success" onClick={() => mergeSort()}>
            Merge Sort
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
