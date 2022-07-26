const generateArray = (arr, height) => {
  const standardHeight = 400;
  arr.push(Math.floor(Math.random() * standardHeight));
  return arr;
};
const createBars = (size, height) => {
  for (let i = 0; i < size; i++) {
    arr = generateArray(arr, height);
    const child = document.createElement("div");
    child.style.height = `${arr[i]}px`;
    child.style.width = `100%`;
    child.style.background = `#61dafb`;
    child.style.margin = `0px 0.1rem`;
    child.classList.add("bar");
    bars.appendChild(child);
  }
};

const removeBars = () => {
  const child = document.getElementsByClassName("bar");
};

const changeColour = (child, flag) => {
  if (!flag) child.style.background = `red`;
  else child.style.background = `#61dafb`;
};

const drawBars = (child1, child2) => {
  temp = child1.style.height;
  child1.style.height = child2.style.height;
  child2.style.height = temp;
};

const animate = (i1, i2, k) => {
  const children = document.getElementsByClassName("bar");
  setTimeout(() => changeColour(children[i1], 0), k * 100);
  setTimeout(() => changeColour(children[i2], 0), k * 100);
  setTimeout(() => drawBars(children[i1], children[i2]), k * 100);
  setTimeout(() => changeColour(children[i1], 1), (k + 1) * 100);
  setTimeout(() => changeColour(children[i2], 1), (k + 1) * 100);
};

function bubbleSort(array) {
  let k = 0;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j + 1] < array[j]) {
        let temp = array[j];
        animate(j, j + 1, k);
        k++;
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  console.log(array);
}

function selectionSort(array) {
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
      animate(i, pos, k);
    }
    k++;
  }
}

let c = 0;
function changeHeightM(insert, left, right) {
  const children = document.getElementsByClassName("bar");
  for (let i = left; i <= right; i++) {
    setTimeout(() => {
      children[i].style.height = `${insert[i - left]}px`;
      changeColour(children[i], 0);
    }, c * 100);
    setTimeout(() => changeColour(children[i], 1), (c + 1) * 100);
    c++;
  }
}
function animate_mergesort(t, k, i) {
  const children = document.getElementsByClassName("bar");
  setTimeout(() => changeColour(children[k], 0), t * 100);
  setTimeout(() => changeColour(children[i], 0), t * 100);
  setTimeout(() => drawBars(children[k], children[i]), t * 100);
  setTimeout(() => changeColour(children[k], 1), (t + 1) * 100);
  setTimeout(() => changeColour(children[i], 1), (t + 1) * 100);
}
let h = 0;
function merger(array, left, mid, right) {
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
    animate_mergesort(c, left + i, mid + j);
    c++;
  }

  while (i < l) {
    array[k++] = left_array[i++];
    animate_mergesort(c, left + i, mid + j);
    c++;
  }
  while (j < r) {
    array[k++] = right_array[j++];
    animate_mergesort(c, left + i, mid + j);
    c++;
  }
  for (let k = left; k <= right; k++) inserted.push(array[k]);
  changeHeightM(inserted, left, right);
}

function mergeSorter(array, first, last) {
  if (first >= last) return;

  let mid = Math.floor((last + first) / 2);
  mergeSorter(array, first, mid);
  mergeSorter(array, mid + 1, last);
  merger(array, first, mid, last);
}

function insertionSort(array) {
  let t = 0;
  const children = document.getElementsByClassName("bar");
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let key = array[i];
    while (j >= 0 && array[j] >= key) {
      array[j + 1] = array[j];
      const child1 = children[j];
      const child2 = children[j + 1];
      setTimeout(() => changeColour(child1, 0), t * 100);
      setTimeout(() => changeColour(child2, 0), t * 100);
      setTimeout(() => drawBars(child1, child2), t * 100);
      setTimeout(() => changeColour(child1, 1), (t + 1) * 100);
      setTimeout(() => changeColour(child2, 1), (t + 1) * 100);
      t++;
      j--;
    }
    array[j + 1] = key;
  }
}

function quickSort(array, first, last) {
  if (first >= last) return;
  const p = partition(array, first, last);
  quickSort(array, first, p - 1);
  quickSort(array, p + 1, last);
}
let q = 0;
const partition = (array, left, right) => {
  let randind = Math.floor(Math.random(right - left + 1)) + left;
  animate(right, randind, q);
  q++;
  [array[right], array[randind]] = [array[randind], array[right]];
  let j = left - 1;
  let pivot = array[right];
  for (let i = left; i <= right; i++) {
    if (array[i] < pivot) {
      j++;
      animate(j, i, q);
      q++;
      [array[j], array[i]] = [array[i], array[j]];
    }
  }
  animate(right, j + 1, q);
  q++;
  [array[j + 1], array[right]] = [array[right], array[j + 1]];
  return j + 1;
};

const countingsort = (array, range) => {
  count = [];
  console.log(array);
  const children = document.getElementsByClassName("bar");
  for (let i = 0; i < range; i++) count.push(0);

  for (let i = 0; i < array.length; i++) {
    count[array[i]]++;
  }
  for (let i = 1; i < range; i++) {
    count[i] += count[i - 1];
  }
  const place = [];
  for (let i = 0; i < array.length; i++) place.push(-1);
  for (let i = 0; i < array.length; i++) {
    let k = array[i];
    place[count[k]] = k;
    count[k]--;
  }
  for (let i = 0; i < array.length; i++) {
    let k = array[i];
    setTimeout(() => changeColour(children[count[k] - 1], 0), i * 100);
    setTimeout(() => (children[count[k] - 1].style.height = `${k}px`), i * 100);
    setTimeout(() => changeColour(children[count[k] - 1], 1), (i + 1) * 100);
  }
  console.log(place);
};

let arr = [];
const max_size = 100;
const size_slider = document.getElementById("size");
createBars((size_slider.value / 10) * max_size + 10, 400);

size_slider.addEventListener("change", removeBars);
const bubblesort = document.getElementsByClassName("button-b1");

bubblesort[0].addEventListener("click", () => bubbleSort(arr));
const selectionsort = document.getElementsByClassName("button-b2");

selectionsort[0].addEventListener("click", () => selectionSort(arr));
const mergesort = document.getElementsByClassName("button-b3");

mergesort[0].addEventListener("click", () => {
  mergeSorter(arr, 0, size - 1);
  console.log(arr);
});

const insertionsort = document.getElementsByClassName("button-b4");
insertionsort[0].addEventListener("click", () => {
  insertionSort(arr);
  console.log(arr);
});

const quicksort = document.getElementsByClassName("button-b5");
quicksort[0].addEventListener("click", () => {
  quickSort(arr, 0, size - 1);
  console.log(arr);
});

const countsort = document.getElementsByClassName("button-b6");
countsort[0].addEventListener("click", () => countingsort(arr, height));

const refresh = () => location.reload();
const reload = document.getElementById("refresh");
reload.addEventListener("click", refresh);
