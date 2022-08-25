const fish = {
    name: 'King Hilsa',
    address: 'Chandpur',
    color: 'Silver',
    phone: '017930000000',
    price: 4000
}

// Object Destucturing
const { name, phone } = fish;
console.log(name);
const { age } = { name: 'Almas', age: 56, profession: 'Makeup Artist' };
console.log(age);

// Array Destructuring
const [first, another] = [44, 99, 88, 456];
console.log(first, another);

const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks; //variable name doesnt matter in array destructuring
console.log(notun);

function getNames() {
    return ['Alim', 'Halim'];
}

const [baba, chacha] = getNames();
console.log(chacha, baba);