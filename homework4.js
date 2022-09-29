function increment() {
  let cont = 0;
  return function () {
    return cont++;
  };
}
let acum = increment();
console.log(acum());
console.log(acum());
console.log(acum());
