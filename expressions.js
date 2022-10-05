//Nullish coalescing operator
//??
// return the right had side when left hand side is null or
//undefined.

let counter = null;
nextRecord = counter ?? 1;
console.log(nextRecord);

//logical Nullish assignment ??=
//It assigns the valur form right side only if left side is nullish
const persona = {
  nombre: "Juanito",
  age: 23,
};

persona.city ??= "Cali";

console.log(persona);

//Logicar Or assignment
// ||=
// NULLISH can be empy, null, "", '', 0, -1, false
const carro = {
  marca: "bmw",
  model: 2015,
  color: false,
};
carro.color ||= "Blue";
console.log(carro);

//Optional chaining ?.
//The optional chaining operator (?.) accesses an object's property or calls a function. If the object is undefined or null, it returns undefined instead of throwing an error.

const components = {
  ram: "500mhz",
  proccesor: "ryzen7",
  fans: {
    rgb: 3,
  },
};

const whiteFans = components.fans?.white; //undefined
const rgbFans = components.fans?.rgb; //3
console.log(whiteFans);
console.log(rgbFans);

//The function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.

//Generators are functions that can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.

function* generator(i) {
  console.log("FirstTime");
  yield i;
  console.log("SecondTime");
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
// expected output: 10

console.log(gen.next().value);
// expected output: 20

//The yield keyword pauses generator function execution and the value of the expression following the yield keyword is returned to the generator's caller. It can be thought of as a generator-based version of the return keyword.

function* foo(index) {
  while (index < 3) {
    yield index;
    index++;
    yield index;
    index++;
  }
}

const iterator = foo(0);

console.log(iterator.next().value);
// expected output: 0

console.log(iterator.next().value);
// expected output: 1

console.log(iterator.next().value);
// expected output: 2
