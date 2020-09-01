import { ANIMATION_SPEED, PRIMARY_COLOR, SECONDARY_COLOR } from "./Constants";
import { sleep } from "./Helper";

const InsertionSort = async (arr) => {
  const animations = [];

  // Perform actual sorting and add to animations
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;

    animations.push({
      compared: [i, i],
      swapped: [arr[i], arr[i]],
    });
    const barSelected = [];
    const barsSwapped = [];

    while (j >= 0 && arr[j] > key) {
      //   barSelected.push(j, j + 1);
      //   barsSwapped.push(arr[j], arr[j + 1]);
      animations.push({
        compared: [j, j + 1],
        swapped: [arr[j], arr[j + 1]],
      });
      arr[j + 1] = arr[j];
      j--;
    }

    animations.push({
      compared: [i, j + 1],
      replaced: [j + 1, key],
    });
    arr[j + 1] = key;
  }

  // Animate sort
  console.log(animations);
  for (let i = 0; i < animations.length; i++) {
    const bars = document.getElementsByClassName("array-bar");
    const [barOneIdx, barTwoIdx] = animations[i].compared;
    const barOneStyle = bars[barOneIdx].style;
    const barTwoStyle = bars[barTwoIdx].style;

    barOneStyle.backgroundColor = SECONDARY_COLOR;
    barTwoStyle.backgroundColor = SECONDARY_COLOR;

    // setTimeout() failed to work here - color would switch back instantly
    await sleep(ANIMATION_SPEED);

    barOneStyle.backgroundColor = PRIMARY_COLOR;
    barTwoStyle.backgroundColor = PRIMARY_COLOR;
    if (animations[i].swapped) {
      const [barOneHeight, barTwoHeight] = animations[i].swapped;
      barOneStyle.height = `${barTwoHeight}px`;
      barTwoStyle.height = `${barOneHeight}px`;
    } else if (animations[i].replaced) {
      const [idx, newHeight] = animations[i].replaced;
      bars[idx].style.height = `${newHeight}px`;
    }
  }
};

export default InsertionSort;
