class Animal {
constructor(public name: string, public species: string, public sound: string) {
}
makeSound(){
	console.log(`The ${this.name} says ${this.sound}`); // 'German Shephard says Ghew Ghew'
}
}

const dog  = new Animal("German Shapard", "dog", "Ghew Ghew");
const cat  = new Animal("Persian", "cat", "meaw meaw");
dog.makeSound();
cat.makeSound();