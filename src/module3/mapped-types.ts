const arrayOfNumbers = [1, 2, 3] // ['1', '2', '3']
const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());
console.log(arrayOfStrings);

type Volume = {
	height: number;
	width: number;
	depth: number;
}

type Area<T> = {
	// [key in keyof Volume ]: Volume[key];
	readonly [key in keyof T] : T[key]
};

const area1: Area<{height: number, width: number}> = {height: 10, width: 10};

type AreaString = {
	height: number;
	width: number;
}

type AreaReadonly = {
	readonly height: number;
	readonly width: number;
}

const rectangularArea: AreaReadonly = {
	height: 10,
	width: 12
}

// rectangularArea.width = 10

type B = Volume['height'] // look up types
type C = keyof Volume // 'width' | 'height'



// const obj = {
// 	name: 'Nibir'
// }
// obj['name']