const exercise1 = (array) => array.join("");

const exercise2 = (array) => array.join("-");

const exercise3 = (numbers) => {
  return numbers
    .map((point, pos) =>
      point % 2 == 0 && numbers[pos + 1] % 2 == 0 ? point + "-" : point
    )
    .join("");
};

console.log(exercise1(["Hi", "this", "is", "javascript"]));
console.log(exercise2(["Hi", "this", "is", "javascript"]));
console.log(exercise3([1, 2, 3, 4, 5, 6, 7, 8, 9]));
