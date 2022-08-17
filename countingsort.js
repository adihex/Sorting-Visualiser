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
  for (let i = 0; i < array.length; i++) place.push(0);

  for (let i = array.length - 1; i >= 0; i--) {
    place[count[array[i]] - 1] = array[i];
    count[array[i]]--;
  }
  for (let i = 0; i < array.length; i++) {
    setTimeout(() => changeColour(children[i], 0), i * t);
    setTimeout(() => (children[i].style.height = `${place[i]}px`), i * t);
    setTimeout(() => changeColour(children[i], 1), (i + 1) * t);
  }
  console.log(place);
};
