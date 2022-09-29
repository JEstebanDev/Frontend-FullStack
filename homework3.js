function isBalance(str) {
  if (str.length <= 1) return true;

  let matchingOpenBracket, ch;
  let stack = [];

  let openBrackets = ["[", "{", "("];
  let closeBrackets = ["]", "}", ")"];

  for (let i = 0; i < str.length; i++) {
    ch = str[i];
    if (closeBrackets.indexOf(ch) > -1) {
      matchingOpenBracket = openBrackets[closeBrackets.indexOf(ch)];
      if (stack.length == 0 || stack.pop() != matchingOpenBracket) {
        return false;
      }
    } else {
      stack.push(ch);
    }
  }
  return stack.length == 0;
}
console.log(isBalance(")("));
