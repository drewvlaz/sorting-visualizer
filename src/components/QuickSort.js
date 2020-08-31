import { ANIMATION_SPEED, PRIMARY_COLOR, SECONDARY_COLOR } from "./Constants";
import { sleep } from "./Helper";

const QuickSort = async (arr) => {
  const animations = [];
  quickSortAlg(arr, 0, arr.length - 1, animations);

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

const quickSortAlg = (arr, l, r, animations) => {
  if (l > r) {
    return;
  }

  // const pivot = Math.floor(Math.random() * arr.length);
  const [m1, m2] = partition(arr, l, r, animations);
  quickSortAlg(arr, l, m1 - 1, animations);
  quickSortAlg(arr, m2 + 1, r, animations);
};

const partition = (arr, l, r, animations) => {
  // Use first num as pivot
  const p = arr[l];
  let k = l,
    i = l,
    j = r;

  // Use three-way partition to speed up arrays with duplicates
  while (k <= j) {
    const barsCompared = [];
    const barsSwapped = [];
    if (arr[k] < p) {
      barsCompared.push(k, i);
      barsSwapped.push(arr[k], arr[i]);
      [arr[k], arr[i]] = [arr[i], arr[k]];
      i++;
    } else if (arr[k] > p) {
      barsCompared.push(k, j);
      barsSwapped.push(arr[k], arr[j]);
      [arr[k], arr[j]] = [arr[j], arr[k]];
      j--;
      continue;
    } else {
      barsCompared.push(k, k);
      barsSwapped.push(arr[k], arr[k]);
    }
    animations.push({
      compared: barsCompared,
      swapped: barsSwapped,
    });
    k++;
  }

  return [i, j];
};

export default QuickSort;
