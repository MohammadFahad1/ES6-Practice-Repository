const student = {
    name: 'Kolim Uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    }
}

// Dot Notation (accessing values using dot)
const marks = student.marks;
const math = student.marks.math;

const chemistry = student['marks']['chemistry'];
const subject = 'math';
// if we want to call from a varable than we must use bracket notation
const subjectMarks = student.marks[subject];
const subjectMarks2 = student.marks.subject; //it will be undifined
console.log(subjectMarks);

