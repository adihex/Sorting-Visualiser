import { changeColour } from "./animations.js";
let c = 0;
const changeHeightM = (insert, left, right, t) => {
  const children = document.getElementsByClassName("bar");
  for (let i = left; i <= right; i++) {
    setTimeout(() => {
      children[i].style.height = `${insert[i - left]}px`;
      changeColour(children[i], 0);
    }, c * t);
    setTimeout(() => changeColour(children[i], 1), (c + 1) * t);
    c++;
  }
};
const animate_mergesort = (j, k, i, t) => {
  const children = document.getElementsByClassName("bar");
  setTimeout(() => changeColour(children[k], 0), j * t);
  setTimeout(() => changeColour(children[i], 0), j * t);
  // setTimeout(() => drawBars(children[k], children[i]), t * 100);
  setTimeout(() => changeColour(children[k], 1), (j + 1) * t);
  setTimeout(() => changeColour(children[i], 1), (j + 1) * t);
};
let h = 0;
const merger = (array, left, mid, right, time) => {
  let inserted = [];
  let left_array = [];
  let right_array = [];

  let l = mid - left + 1;
  let r = right - mid;

  for (let t = 0; t < l; t++) {
    left_array.push(array[t + left]);
  }
  for (let t = 0; t < r; t++) right_array.push(array[t + mid + 1]);

  let i = 0;
  let j = 0;
  let k = left;

  while (i < l && j < r) {
    if (left_array[i] < right_array[j]) {
      array[k++] = left_array[i++];
    } else {
      array[k++] = right_array[j++];
    }
    animate_mergesort(c, left + i, mid + j, time);
    c++;
  }

  while (i < l) {
    array[k++] = left_array[i++];
    animate_mergesort(c, left + i, mid + j, time);
    c++;
  }
  while (j < r) {
    array[k++] = right_array[j++];
    animate_mergesort(c, left + i, mid + j, time);
    c++;
  }
  for (let k = left; k <= right; k++) inserted.push(array[k]);
  changeHeightM(inserted, left, right, time);
};

export const mergeSorter = (array, first, last, time) => {
  if (first >= last) return;

  let mid = Math.floor((last + first) / 2);
  mergeSorter(array, first, mid, time);
  mergeSorter(array, mid + 1, last, time);
  merger(array, first, mid, last, time);
};
