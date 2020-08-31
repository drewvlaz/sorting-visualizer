const BubbleSort = (arr) => {
  const animations = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      const compared = [j, j + 1];
      const swapped = [];
      if (arr[j] > arr[j + 1]) {
        swapped.push(arr[j], arr[j + 1]);
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
      animations.push({
        compared: compared,
        swapped: swapped,
      });
    }
  }

  return animations;
};

export default BubbleSort;
