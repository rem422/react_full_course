const hobbies = ['reading', 'painting', 'coding'];

const user = {
    name: 'Rem',
    age: 25
};

const extendedUser = {
    isAdmin: true,
    ...user
}
console.log(extendedUser);

const newHobby = ['Sports'];

const mergeHobbies =  [...hobbies,...newHobby];
console.log(mergeHobbies);


