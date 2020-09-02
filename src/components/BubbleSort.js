import { ANIMATION_SPEED, PRIMARY_COLOR, SECONDARY_COLOR } from "./Constants";
import { sleep } from "./Helper";

const BubbleSort = async (arr) => {
  // Perform actual sorting and add to animations
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      const bars = document.getElementsByClassName("array-bar");
      const barOneStyle = bars[j].style;
      const barTwoStyle = bars[j + 1].style;

      // Highlight current bars
      barOneStyle.backgroundColor = SECONDARY_COLOR;
      barTwoStyle.backgroundColor = SECONDARY_COLOR;

      // setTimeout() failed to work here - color would switch back instantly
      await sleep(ANIMATION_SPEED);

      // Perform swap
      if (arr[j] > arr[j + 1]) {
        barOneStyle.height = `${arr[j + 1]}px`;
        barTwoStyle.height = `${arr[j]}px`;
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }

      // Revert color back
      barOneStyle.backgroundColor = PRIMARY_COLOR;
      barTwoStyle.backgroundColor = PRIMARY_COLOR;
    }
  }
};

export default BubbleSort;
