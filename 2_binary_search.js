const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let counter = 0;

function binarySearch(array, item) {
  let start = 0;
  let end = array.length;
  let middle;
  let found = false;
  let position = -1;

  while (found === false && start <= end) {
    counter += 1;
    middle = Math.floor((start + end) / 2);
    console.log(middle);

    if (array[middle] === item) {
      found = true;
      position = middle;
      return position;
    }
    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}

console.log("Номер индекса:", binarySearch(array, 8));
console.log("Кол-во итераций:", counter);
