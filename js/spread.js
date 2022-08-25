const max = Math.max(12, 85, 999, 78);
// console.log(max);

const numbers = [12, 85, 999, 78];
const largest = Math.max(...numbers);
// console.log(largest);

// const numbers2 = numbers;
const numbers2 = [...numbers]; //Right way of copying an array
numbers.push(55);
numbers2.push(777);
// numbers2.push(777) //Even if we push to numbers2 still it's gonna set to both
// console.log(numbers);
// console.log(numbers2);

// Spred operators uses
const numbers3 = [444, 72, ...numbers, 45, 65];
console.log(numbers3);