import { ANIMATION_SPEED, PRIMARY_COLOR, SECONDARY_COLOR } from "./Constants";
import { sleep } from "./Helper";

const MergeSort = async (arr) => {
  const animations = [];
  mergeSortAlg(arr, 0, arr.length - 1, animations);

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

const mergeSortAlg = (arr, l, r, animations) => {
  if (l >= r) {
    return;
  }
  let m = Math.floor((r - l) / 2 + l);
  mergeSortAlg(arr, l, m, animations);
  mergeSortAlg(arr, m + 1, r, animations);
  merge(arr, l, m, r, animations);
};

const merge = (arr, l, m, r, animations) => {
  let n1 = m - l + 1;
  let n2 = r - m;

  // Temp arrays
  let L = [],
    R = [];
  for (let i = 0; i < n1; i++) {
    L.push(arr[l + i]);
  }
  for (let i = 0; i < n2; i++) {
    R.push(arr[m + 1 + i]);
  }

  let i = 0,
    j = 0,
    k = l;

  // Merge temp arrays back into main
  while (i < n1 && j < n2) {
    // Comparing two bars
    const barsCompared = [k, m + 1 + j];
    const barReplaced = [];
    if (L[i] <= R[j]) {
      barReplaced.push(k, L[i]);
      arr[k] = L[i];
      i++;
    } else {
      barReplaced.push(k, R[j]);
      arr[k] = R[j];
      j++;
    }
    k++;
    animations.push({
      compared: barsCompared,
      replaced: barReplaced,
    });
  }

  // Merge remaining elements
  while (i < n1) {
    animations.push({
      compared: [l + i, l + i],
      replaced: [k, L[i]],
    });
    arr[k++] = L[i++];
  }
  while (j < n2) {
    animations.push({
      compared: [m + 1 + j, m + 1 + j],
      replaced: [k, R[j]],
    });
    arr[k++] = R[j++];
  }
};

export default MergeSort;
