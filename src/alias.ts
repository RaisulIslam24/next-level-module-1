type CrushType = {
	name: string;
	age?: number;
	profession: string;
	address: string;
}

const crush1:CrushType = {
	name: "Moina Pakhi",
	age: 22,
	profession: "Web Developer",
	address: "Uganda",
};

const crush2:CrushType = {
	name: "Tia Pakhi",
	profession: "Web Developer",
	address: "Uganda",
};

type CrushMarriedType = boolean;

const isCrushMarried = false;

type CourseNameType = string;

const courseName: CourseNameType = 'Next Level Web Development';

type OperationType = (x: number, y: number) => number;

const calculate = (number1: number, number2: number, operation: OperationType) => {
	return operation(number1,number2);
};

calculate(10, 20, (x, y) => x + y)
calculate(10, 20, (x, y) => x - y)
calculate(10, 20, (x, y) => x * y)
calculate(10, 20, (x, y) => x / y)