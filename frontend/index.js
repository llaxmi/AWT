function double(num) {
  return num * 2;
}

function applyTwice(fn, value) {
  return fn(fn(value));
}

console.log(applyTwice(double, 3));

//spread
const a = [1, 2];
const b = [3, 4];
const combined = [...a, ...b];
console.log(combined);

//rest
function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}
// Purpose: Spread elements of an array/object/string into individual values.

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20)); // 30
// Purpose: Collect multiple arguments into a single array inside a function.
