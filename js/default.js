
function add(first = 0, second = 0) {
    /* 
    // Old way of setting a previous value
    if (second === undefined) {
        second = 0;
    }
    */
    /* 
    second = second || 0;
     */
    const total = first + second;
    return total;
}

const result = add(undefined, 10);
console.log(result);


function fullName(first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name;
}
const name = fullName('Aslam'); //Aslam is an argument where as first & last in the function was the parameter
console.log(name);