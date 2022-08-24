const add = (first, second) => first + second;
const getFullName = (first, last) => first + ' ' + last;
const multiply = (a, b) => a * b;

const result = multiply(7, 9);
console.log(result);

const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;

// No parameter arrow function
const getPie = () => 3.14;

// One Parameter
const doubleIt = (num) => num * 5;

// One Parameter simple version
const doubleit = num => num * 5;

// Multi line arrow function
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum + secondSum;
    const result = multiplyResult / 2;
    return result;
}