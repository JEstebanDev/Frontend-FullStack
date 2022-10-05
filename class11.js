import fetch from "node-fetch";

async function main() {
  var value = await fetch("https://jsonplaceholder.typicode.com/todos");
  const response = await value.json();
  return response;
}

try {
  const text = await main();
  const result = text.filter((el) => el.completed);
  console.log(result);
} catch (e) {
  // Deal with the fact the chain failed
}
