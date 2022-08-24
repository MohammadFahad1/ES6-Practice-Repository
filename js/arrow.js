/* function add(first, Second) {
    const total = first + Second;
    return total;
}
 */
// Function Expression
const add1 = function add1(first, Second) {
    const total = first + Second;
    return total;
}

const add2 = function () {
    // Annonimous Function or Nameless Function
    // Function Expression
    const total = first + Second;
    return total;
}

function add(first, second) {
    const total = first + second;
    return total;
}

function add4(first, second) {
    return first + second;
}

const add5 = function (first, second) {
    return first + second;
}

const add6 = (first, second) => first + second; // Arrow Function

const number = 56; // Variable Expression

// Difference Between Function & Variable Expression ?



const result = add6(10, 20);
// console.log(result);
// function getSum(a, b = 9) { return a + b; } console.log(getSum(2, 7));
// const y = x => x * x; const z = y(5);
// console.log(z);

// const hero = ['fahad', 'rahad'];
// const hero2 = [...hero]; //Copy of the array

// const numbers = [10, 20, 30, 40, 50, 60, 70];
// // const max = Math.max(...numbers);
// const max = Math.max(...numbers);
// console.log(max);

// const cars = ['toyota', 'honda', 'mercedes'];
// const newCars = [...cars, 'ferrari'];
// console.log(newCars);

// Interview Question About Arrow Function