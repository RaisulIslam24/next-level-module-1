const crush = "Kate Winslet";

type MyInfoType = {
	name: string;
	age: number;
	salary: number;
	other1: false,
	other2: null
}

const myInfo:MyInfoType = {
	name: "Nibir",
	age: 25,
	salary: 100000,
	other1: false,
	other2: null
};

type MandatoryType = {name: string, age: number, salary: number}
interface MandatoryInterface {name: string, age: number, salary: number}

// const newData = {...myInfo, crush}
const addMeInMyCrushMind = <T extends MandatoryInterface>(myInfo: T) => {
	const crush = "Kate Winslet";
	const newData = {...myInfo, crush};
	return newData;
}

const result5 = addMeInMyCrushMind(myInfo);