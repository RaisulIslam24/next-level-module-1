//normal function
//default parameter
function add1(num1:number, num2:number = 10):number {
	return num1 + num2;
}

add1(345,57)

//spread operator

const myFriends = ['Shefat', 'Dhrubo']
const newFriends = ['Rahim', 'Karin']

myFriends.push(...newFriends)
console.log(myFriends)

const addArrow = (num1:number, num2:number):number => num1 + num2;

const arr = [3,4,5];

const newArray = arr.map((el: number) => el*el);

const person1: {
	name: string;
	balance: number;
	addBalance(money: number): void;
	} = {
	name: 'Nibir',
	balance: 3,
	addBalance(money: number) {
		return `My new balance is ${this.balance + money}`;
	},
};

//rest parameter

const greetFriends = (...friends: string[]): void => friends.forEach((friend) => console.log(`Hi ${friend}`));

greetFriends("kashem", "hashem", "gashem", "lashem");

//array and object destructuring

const myBestFriend = {
	fullName: 'Abul Bashar',
	age:24
}

const [bestFriend] = myFriends;
const {fullName: myFullName} = myBestFriend

console.log(myFullName)