import { changeColour, drawBars } from "./animations.js";
export const insertionSort = (array, time) => {
  let t = 0;
  const children = document.getElementsByClassName("bar");
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let key = array[i];
    while (j >= 0 && array[j] >= key) {
      array[j + 1] = array[j];
      const child1 = children[j];
      const child2 = children[j + 1];
      setTimeout(() => changeColour(child1, 0), t * time);
      setTimeout(() => changeColour(child2, 0), t * time);
      setTimeout(() => drawBars(child1, child2), t * time);
      setTimeout(() => changeColour(child1, 1), (t + 1) * time);
      setTimeout(() => changeColour(child2, 1), (t + 1) * time);
      t++;
      j--;
    }
    array[j + 1] = key;
  }
};
