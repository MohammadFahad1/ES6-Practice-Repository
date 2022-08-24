// breakup with var
// no more use of var

let money = 25;
money = 35;
console.log(money);

const bird = 'Jaan Pakhi';
// bird = 'Moyna Pakhi'; 
const message = bird + ' potash potash';
console.log(message);

const numbers = [12, 89, 65, 45];
numbers.push(18);
console.log(numbers);

const student = {
    name: 'Mofiz',
    address: 'Rangpur'
}

// student = {name: 'Mofazzal'};
student.name = 'Mofazzol';

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    sum = sum + number;
}