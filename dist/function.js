"use strict";
//normal function
//default parameter
function add(num1, num2 = 10) {
    return num1 + num2;
}
add(345, 57);
//spread operator
const myFriends = ['Shefat', 'Dhrubo'];
const newFriends = ['Rahim', 'Karin'];
myFriends.push(...newFriends);
console.log(myFriends);
const addArrow = (num1, num2) => num1 + num2;
const arr = [3, 4, 5];
const newArray = arr.map((el) => el * el);
const person1 = {
    name: 'Nibir',
    balance: 3,
    addBalance(money) {
        return `My new balance is ${this.balance + money}`;
    },
};
//rest parameter
const greetFriends = (...friends) => friends.forEach((friend) => console.log(`Hi ${friend}`));
greetFriends("kashem", "hashem", "gashem", "lashem");
//array and object destructuring
const myBestFriend = {
    fullName: 'Abul Bashar',
    age: 24
};
const [bestFriend] = myFriends;
const { fullName: myFullName } = myBestFriend;
console.log(myFullName);
