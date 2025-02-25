const user ={
    name: 'John Doe',
    age: 34,
    greet () {
        console.log('Hello');
        console.log(this.age);
    }
}

console.log(user);
console.log(user.name);
console.log(user.age);
user.greet();

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log('Hello everyone!');
    }
}

const user1 = new User('James', 25);
console.log(user1);
user1.greet();




