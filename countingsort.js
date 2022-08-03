import { changeColour } from "./animations.js";
let place = [];
export const countingsort = (array, range, t) => {
  let count = [];
  console.log(array);
  const children = document.getElementsByClassName("bar");
  for (let i = 0; i < range; i++) count.push(0);

  for (let i = 0; i < array.length; i++) {
    count[array[i]]++;
  }
  for (let i = 1; i < range; i++) {
    count[i] += count[i - 1];
  }
  for (let i = 0; i < array.length; i++) place.push(-1);
  for (let i = 0; i < array.length; i++) {
    let k = array[i];
    place[count[k]] = k;
    count[k]--;
  }
  for (let i = 0; i < array.length; i++) {
    let k = array[i];
    setTimeout(() => changeColour(children[count[k] - 1], 0), i * t);
    setTimeout(() => (children[count[k] - 1].style.height = `${k}px`), i * t);
    setTimeout(() => changeColour(children[count[k] - 1], 1), (i + 1) * t);
  }
};
