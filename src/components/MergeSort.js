const MergeSort = (arr) => {
  const animations = [];
  mergeSortHelper(arr, 0, arr.length - 1, animations);
  return animations;
};

const mergeSortHelper = (arr, l, r, animations) => {
  if (l >= r) {
    return;
  }
  let m = Math.floor((r - l) / 2 + l);
  mergeSortHelper(arr, l, m, animations);
  mergeSortHelper(arr, m + 1, r, animations);
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
    const barsCompared = [l + i, m + 1 + j];
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
