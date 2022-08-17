import { animate } from "./animations.js";
const bubbleSort = (array, t) => {
  let k = 0;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j + 1] < array[j]) {
        let temp = array[j];
        animate(j, j + 1, k, t);
        k++;
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  console.log(array);
};

export { bubbleSort };
