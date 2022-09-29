let isBalanced = (input) => {
  if (str.length <= 1) return false;

  let brackets = "[]{}()";
  let stack = [];

  for (let bracket of input) {
    console.log("Dato", bracket);
    let bracketsIndex = brackets.indexOf(bracket);
    console.log("bracketsIndex", bracketsIndex);
    if (bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1);
    } else {
      if (stack.pop() !== bracketsIndex) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

//isBalanced('()')
console.log(isBalanced(""));
//console.log(isBalanced("{(})"));
