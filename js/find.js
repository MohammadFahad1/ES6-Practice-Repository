const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

// Filter is similar to filter, but find only return 1 value
const fives = numbers.find(num => num % 5 === 0);
console.log(fives);

const products = [
    { id: 1, name: 'Laptop', price: 45000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 35000 },
    { id: 4, name: 'tablet', price: 23000 }
];
const cheap = products.find(product => product.price < 40000);
console.log(cheap);