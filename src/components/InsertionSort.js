import { ANIMATION_SPEED, PRIMARY_COLOR, SECONDARY_COLOR } from "./Constants";
import { sleep } from "./Helper";

const InsertionSort = async (arr) => {
  const animations = [];

  // Perform actual sorting and add to animations
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  // Animate sort
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

export default InsertionSort;
