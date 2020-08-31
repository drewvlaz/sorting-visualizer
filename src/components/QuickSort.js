import { ANIMATION_SPEED, PRIMARY_COLOR, SECONDARY_COLOR } from "./Constants";
import { sleep } from "./Helper";

const QuickSort = (arr) => {
  const animations = [];
  quickSortAlg(arr, 0, arr.length - 1, animations);
};

const quickSortAlg = (arr, l, r, animations) => {
  if (l > r) {
    return;
  }

  // const pivot = Math.floor(Math.random() * arr.length);
  const [m1, m2] = partition(arr, l, r, animations);
  quickSortAlg(arr, l, m1 - 1);
  quickSortAlg(arr, m2 + 1, r);
};

const partition = (arr, l, r, animations) => {
  // Use first num as pivot
  const p = arr[l];
  let k = l,
    i = l,
    j = r;

  // Use three-way partition to speed up arrays with duplicates
  while (k <= j) {
    if (arr[k] < p) {
      [arr[k], arr[i]] = [arr[i], arr[k]];
      i++;
    } else if (arr[k] > p) {
      [arr[k], arr[j]] = [arr[j], arr[k]];
      j--;
      continue;
    }
    k++;
  }

  return [i, j];
};

export default QuickSort;
