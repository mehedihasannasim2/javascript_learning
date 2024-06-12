// Problem 5:
// You are given an object called “student” representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called calculateAverageGrade that takes this student object as input and calculates the average grade.




const student = {
    name: "nasim",
    age: 25,
    grades: [85, 90, 75, 95]
};

function calculateAverageGrade(student) {
    const sum = student.grades.reduce((total, grade) => total + grade, 0);
    const average = sum / student.grades.length;
    return average;
}

console.log("Average: ", calculateAverageGrade(student));
