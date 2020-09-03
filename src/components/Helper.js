// import BubbleSort from "./BubbleSort";
// import MergeSort from "./MergeSort";
// import QuickSort from "./QuickSort";
// import InsertionSort from "./InsertionSort";

export const testSort = () => {
  // Create arr of random length filled with random numbers
  const arr = [];
  const len = randInt(10, 1000);
  for (let i = 0; i < len; i++) {
    arr.push(randInt(-1000, 1000));
  }
  console.log(arr);

  // Sorted copy of arr
  const jsSortedArr = arr.slice().sort((a, b) => a - b);

  // Sort to test
  // BubbleSort(arr);
  // MergeSort(arr);
  // QuickSort(arr);
  // InsertionSort(arr);

  console.log(arr);
  console.log(equalArr(jsSortedArr, arr));
};

export const equalArr = (arrOne, arrTwo) => {
  if (arrOne.length !== arrTwo.length) return false;
  for (let i = 0; i < arrTwo.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

export const randInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
