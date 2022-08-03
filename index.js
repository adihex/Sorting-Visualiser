import { bubbleSort } from "./bubblesort.js";
import { selectionSort } from "./selectionsort.js";
import { quickSort } from "./quicksort.js";
import { mergeSorter } from "./mergesort.js";
import { insertionSort } from "./insertionsort.js";
import { countingsort } from "./countingsort.js";
const max_size = 500;
const height = 400;

const generateRandomElement = (height) => {
  return Math.floor(Math.random() * height);
};

const generateArray = (size, height) => {
  let arr = new Array(size);
  for (let i = 0; i < size; i++) arr[i] = generateRandomElement(height);
  return arr;
};

const addElementsToArray = (arr, height, bars, newsize) => {
  console.log(arr.length, "Array length");
  console.log(newsize, "New size");
  const newArray = generateArray(Number(newsize - arr.length), height);
  console.log(newArray);
  let oldArrayLength = arr.length;
  arr = arr.concat(newArray);
  bars = createBars(Number(newsize - oldArrayLength), bars, newArray);
  return arr;
};

const removeArrayElements = (arr, bars, newsize, height) => {
  const newArray = generateArray(newsize, height);
  const child = Array.prototype.slice.call(bars.children);
  console.log(child);
  for (let i = 0; i < arr.length; i++) {
    child[i].remove();
  }
  arr = [];
  createBars(newsize, bars, newArray);
  return newArray;
};

const createBars = (size, bars, arr) => {
  for (let i = 0; i < size; i++) {
    const child = document.createElement("div");
    child.style.height = `${arr[i]}px`;
    child.style.width = `100%`;
    child.style.background = `#61dafb`;
    child.style.margin = `0px 0.1rem`;
    child.classList.add("bar");
    bars.appendChild(child);
  }
  return bars;
};

const size_slider = document.getElementById("size");
const bubblesort = document.getElementsByClassName("button-b1");
const selectionsort = document.getElementsByClassName("button-b2");
const mergesort = document.getElementsByClassName("button-b3");
const insertionsort = document.getElementsByClassName("button-b4");
const quicksort = document.getElementsByClassName("button-b5");
const countsort = document.getElementsByClassName("button-b6");
const bars = document.getElementById("bars");
const refresh = () => location.reload();
const reload = document.getElementById("refresh");
reload.addEventListener("click", refresh);
const interval_slider = document.getElementById("interval");
function init() {
  let size = (Number(size_slider.value) / 100) * max_size;
  let arr = generateArray(size, height);
  let time = Number(interval_slider.value) * 100;
  createBars(size, bars, arr);
  bubblesort[0].addEventListener("click", () => bubbleSort(arr, time));
  selectionsort[0].addEventListener("click", () => selectionSort(arr, time));
  mergesort[0].addEventListener("click", () => {
    mergeSorter(arr, 0, size - 1, time);
  });
  insertionsort[0].addEventListener("click", () => {
    insertionSort(arr, time);
    console.log(arr);
  });
  quicksort[0].addEventListener("click", () => {
    quickSort(arr, 0, size - 1, time);
    console.log(arr);
  });
  countsort[0].addEventListener("click", () => countingsort(arr, height, time));
  size_slider.addEventListener("input", (e) => {
    let new_size = (Number(e.target.value) / 100) * max_size;
    if (new_size > size) {
      console.log(e.target.value);
      arr = addElementsToArray(arr, height, bars, new_size);
      return (size = arr.length);
    } else {
      arr = removeArrayElements(arr, bars, new_size, height);
      return (size = arr.length);
    }
  });
  interval_slider.addEventListener("input", (e) => {
    time = Number(e.target.value * 10);
  });
}
init();
