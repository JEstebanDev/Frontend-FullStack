const exercise1 = (numbers) => {
  let acum = 0;
  for (let index = 0; index < numbers.length; index++) {
    acum += numbers[index];
  }
  return acum / numbers.length;
};

const sumOdds = (numbers) => {
  let acum = 0;
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 != 0) {
      acum += numbers[index];
    }
  }
  return acum;
};

const RunOperation = (a, b, operator) => {
  let arrayNumbers = operator(a, b);
  for (let index = 0; index < arrayNumbers.length; index++) {
    console.log(arrayNumbers[index]);
  }
};

function operator(a, b) {
  let array = [];

  array[0] = a + b;
  array[1] = a - b;
  array[2] = a * b;
  array[3] = b == 0 ? "Error" : a / b;
  return array;
}

console.log("Exercise1\n", exercise1([3, 2, 5, 7, 4, 8, 1]));
console.log("Exercise2\n", sumOdds([3, 2, 5, 7, 4, 8, 1]));
console.log("Exercise3", RunOperation(8, 2, operator));
