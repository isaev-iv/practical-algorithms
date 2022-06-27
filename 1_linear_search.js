const array = [1, 3, 5, 2, 7, 4, 9, 6, 8, 10];
let counter = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      counter += 1;
      return i;
    }
  }
  return null;
}

console.log("Номер индекса:", linearSearch(array, 5));
console.log("Кол-во итераций:", counter);
