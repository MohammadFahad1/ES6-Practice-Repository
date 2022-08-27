const numbers = [2, 8, 4, 6, 3];
/* const output = [];
for (const number of numbers) {
    const doubled = number * 2;
    output.push(doubled);
} */

function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}

function doubleIdOld(number) {
    return number * 2;
}

const doubleIt = num => num * 2;

const makeDouble = numbers.map(num => num * 2);
const makeDouble2 = numbers.map(doubleIt);
const makeDouble3 = numbers.map(x => x * 2);
const fiveTimes = numbers.map(x => x * 5);

console.log(getDoubles(numbers));
console.log(makeDouble);
console.log(makeDouble2);
console.log(makeDouble3);
console.log('Five Times:', fiveTimes);