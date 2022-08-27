const users = [
    { id: 1, name: 'abul', job: 'doctor' }
];
console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        { id: 1, name: 'babul', job: 'leader' },
        { id: 2, name: 'dabul', job: 'leader' }
    ]
}

console.log(data.data[0].name);

const user = {
    id: 5001,
    name: 'Md. Fahad Monshi',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
}
const userFloor = user.address.street.second;
console.log(userFloor);

// Optional Chaining
const userSide = user.address?.street?.third;
console.log(userSide);

/* function min(nums) {
    return Math.min(nums)
}
console.log(min(...[1, 3, 2]))
 */

/* const cube = x => x * x * x;
console.log(cube(2))  */

/* const [a, b] = [1, 2, 3, 4, 45, 5];
console.log(a + b); */

/* const { x, y, z } = { x: 1, y1: 2, z: 3 };
console.log(y); */

/* const nums = [1, 2, 3, 4, 5];
let output = nums.filter(n => n % 2);
console.log(output); */

/* const friends = ["Moushumi", "Misha", "Manna", "mimi", "mahiya"];
const friendName = friends.find(friend => friend.length == 5);
console.log(friendName); */

/* const product = {
    name: 'Laptop',
    model: 'Yoga 3',
    price: 49000,
    dusk: '512SSD'
}

const { price } = product;
console.log(price); */

/* class Person {
    constructor() {
        console.log('person');
    }
}

person = new Person(); */
