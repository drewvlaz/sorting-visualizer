import { ANIMATION_SPEED, PRIMARY_COLOR, SECONDARY_COLOR } from "./Constants";
import { sleep } from "./Helper";

const BubbleSort = async (arr) => {
  const animations = [];

  // Perform actual sorting and add to animations
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      const compared = [j, j + 1];
      const swapped = [];
      if (arr[j] > arr[j + 1]) {
        swapped.push(arr[j], arr[j + 1]);
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      animations.push({
        compared: compared,
        swapped: swapped,
      });
    }
  }

  // Animate sort
  for (let i = 0; i < animations.length; i++) {
    const bars = document.getElementsByClassName("array-bar");
    const [barOneIdx, barTwoIdx] = animations[i].compared;
    const barOneStyle = bars[barOneIdx].style;
    const barTwoStyle = bars[barTwoIdx].style;

    // Highlight compared bars
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

    // Revert bars back to original color
    barOneStyle.backgroundColor = PRIMARY_COLOR;
    barTwoStyle.backgroundColor = PRIMARY_COLOR;
  }
};

export default BubbleSort;
