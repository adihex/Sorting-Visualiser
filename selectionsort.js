import { animate } from "./animations.js";
const selectionSort = (array, t) => {
  let k = 0;
  for (let i = 0; i < array.length - 1; i++) {
    let min = array[i];
    let pos = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j];
        pos = j;
      }
    }
    if (pos != i) {
      let temp = array[i];
      array[i] = array[pos];
      array[pos] = temp;
      animate(i, pos, k, t);
    }
    k++;
  }
};
export { selectionSort };
