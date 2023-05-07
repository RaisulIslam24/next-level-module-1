// // Arrow function

// const createArray = (param: string): string[] => {
// 	return [param];
// };

// const createArray1 = <X, Y>(param1: X, param2: Y): [X, Y] => {
// 	return [param1, param2];
// };

// function createArray2<X, Y>(param1: X, param2: Y): [X, Y] {
// 	return [param1, param2];
// };

// const result1 = createArray1<string, string>('Bangladesh', 'I love muy country');
// const result2 = createArray1<boolean, Array<string>>(false, ['USA']);

// type Name = {name: string};

// const result3 = createArray1<Name, boolean>({name: 'Bangladesh'}, false);

// // Spread Operator

// const crush = "Kate Winslet";
// const myInfo = {
// 	name: "Nibir",
// 	age: 25,
// 	salary: 100000
// };

// // const newData = {...myInfo, crush}
// const addMeInMyCrushMind = <T>(myInfo: T) => {
// 	const crush = "Kate Winslet";
// 	const newData = {...myInfo, crush};
// 	return newData;
// }

// const result5 = addMeInMyCrushMind(myInfo);