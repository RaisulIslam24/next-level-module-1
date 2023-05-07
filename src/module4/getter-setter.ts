class BankAccount1 {
	public id: number;
	public name: string;
	private _balance: number;

	constructor(id: number, name: string, balance: number) {
		this.id = id;
		this.name = name;
		this._balance = balance;
	}

	// getter
	get balance(): number {
		return this._balance;
	}

	// setter
	set deposit(amount: number) {
		this._balance = this._balance + amount;
	}

	// getBalance(): number {
	// 	return this._balance;
	// }
	// addDeposit(amount: number) {
	// 	this._balance = this._balance + amount;
	// }
}

const myAccount1 = new BankAccount1(444, "Nibir", 20);
console.log(myAccount1.balance);
myAccount1.deposit = 30;
console.log(myAccount1.balance);