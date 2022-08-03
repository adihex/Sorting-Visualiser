const changeColour = (child, flag) => {
  console.log(child);
  if (!flag) child.style.background = `red`;
  else child.style.background = `#61dafb`;
};

const drawBars = (child1, child2) => {
  let temp = child1.style.height;
  child1.style.height = child2.style.height;
  child2.style.height = temp;
};

const animate = (i1, i2, k, t) => {
  const children = document.getElementsByClassName("bar");
  setTimeout(() => changeColour(children[i1], 0), k * t);
  setTimeout(() => changeColour(children[i2], 0), k * t);
  setTimeout(() => drawBars(children[i1], children[i2]), k * t);
  setTimeout(() => changeColour(children[i1], 1), (k + 1) * t);
  setTimeout(() => changeColour(children[i2], 1), (k + 1) * t);
};

export { changeColour, drawBars, animate };
