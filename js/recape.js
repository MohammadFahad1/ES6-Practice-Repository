// Default Parameter
function calculateSalary(salary, tax, bonus = 0) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}

// Template String
const elementHTML = `
    <div>
        <h3>Name: </h3>
        <p>Address: </p>
        <p>Salary: ${calculateSalary(10000, 0, 0)}</p>
        <p>Others: ${numbers[2]}</p>
    </div>
`;

// Arrow Function
const doubleIt = x => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax;

// Spread
const ages = [11, 12, 13, 14, 15, 16];
const newAges = [...ages, 22, 24, 23];

// destructuring
const { x, y, z, ...c } = { x: 45, y: 12, z: 33, name: 'Md. Fahad Monshi' }; //...c is storing the rest values like name in it
const [a, b, ...r] = [12, 45, 21, 65, 98]; //after a & b the remaining values gonna stored into r