const hobbies = ['reading', 'painting', 'cooking'];
console.log(hobbies[0]);

hobbies.push('gardening');
console.log(hobbies);

const index = hobbies.findIndex((item) => item === 'cooking');
console.log( index);


const editedHobbies = hobbies.map((item) =>  ({text: item}));
console.log(editedHobbies);





