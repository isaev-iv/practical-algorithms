const arr = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
];

let count = 0;

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[indexMin]) {
        indexMin = j;
      }
      count += 1;
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
}

console.log(selectionSort(arr));
console.log("count = ", count);

// [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3];
//  ^
//  indexMin = 0
//     ^
//     0 < 3
//  indexMin = 1
//  tmp = 0
//  array[0] = 0;
//  array[1] = 0
//  [3, 0, 2, 5, 6, 8...]
//      ^
