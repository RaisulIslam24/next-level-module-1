// type GenericTuple<X, Y> = [X, Y]

// const relation:GenericTuple<string, string> = ["Nibir", "Kate Winslet"];

// // type RelationWithSalryType = {name: string, salary: number}

// interface IRelationWithSalryType {name: string, salary: number}

// const relationWithSalary: GenericTuple<object, string> = [
// 	{
// 		name: 'Nibir',
// 		salary: 100000,
// 	},
// 	"Kate, Winslet"
// ]

// const relationWithSalary2: GenericTuple<IRelationWithSalryType, string> = [
// 	{
// 		name: 'Nibir',
// 		salary: 100000,
// 	},
// 	"Kate, Winslet"
// ]

// type GenericArray<T> = Array<T>

// const rollNumbers1: GenericArray<number> = [44, 12, 4];
// const rollNumbers2: GenericArray<string> = ['44', '12', '4'];
// const rollNumbers3: GenericArray<boolean> = [true, false];

// type NameRollType = {name: string, roll:number}

// const userNameAndRollNumbers: GenericArray<NameRollType> = [{name: 'Mr. X', roll: 1}, {name: 'Mr. X', roll: 1}];

// add(3, 4)