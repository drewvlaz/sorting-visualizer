import React from "react";

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
    animations.push([i, j]);
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  // Merge remaining elements
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
};

export default MergeSort;
