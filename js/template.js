const person = 'Adam Sandler', //Single Quotation
    person2 = "Ben White", // Double Quotation
    person3 = `Donal Trump`; // Backtic also known as Carret

// Old way of multiline text value
const multiline = "First Line Text \n" +
    'Second line code \n' +
    'Third line code \n' +
    'Fourth line of code';
console.log(multiline);

// New way of multiline value using backtic
const newMultiline = `
    First Line 
    Second Line
    Third Line
    Fourth Line
`;

const a = 20;
const b = 30;
const nums = [12, 45, 78, 68, 444, 55, 66, 89];
const summery = 'Sum of: ' + a + ' and ' + b + ' is: ' + (a + b);
// console.log(summery);

const newSummery = `Sum of: ${a} and ${b} is: ${a + b} and nums array length ${nums.length}`;
console.log(newSummery);