"use strict";
const crush1 = {
    name: "Moina Pakhi",
    age: 22,
    profession: "Web Developer",
    address: "Uganda",
};
const crush2 = {
    name: "Tia Pakhi",
    profession: "Web Developer",
    address: "Uganda",
};
const isCrushMarried = false;
const courseName = 'Next Level Web Development';
const calculate = (number1, number2, operation) => {
    return operation(number1, number2);
};
calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);
calculate(10, 20, (x, y) => x / y);
