import { animate } from "./animations.js";
let q = 0;
export const partition = (array, left, right, t) => {
  let randind = Math.floor(Math.random(right - left + 1)) + left;
  animate(right, randind, q, t);
  q++;
  [array[right], array[randind]] = [array[randind], array[right]];
  let j = left - 1;
  let pivot = array[right];
  for (let i = left; i <= right; i++) {
    if (array[i] < pivot) {
      j++;
      animate(j, i, q, t);
      q++;
      [array[j], array[i]] = [array[i], array[j]];
    }
  }
  animate(right, j + 1, q, t);
  q++;
  [array[j + 1], array[right]] = [array[right], array[j + 1]];
  return j + 1;
};

export const quickSort = (array, first, last, t) => {
  if (first >= last) return;
  const p = partition(array, first, last, t);
  quickSort(array, first, p - 1, t);
  quickSort(array, p + 1, last, t);
};
