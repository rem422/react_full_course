function transformToObjects(numberArray) {
    return numberArray.map(number => {
        return {value: number};
    });
};

const number = [1, 2, 3, 4];
const Objects = transformToObjects(number);
console.log(Objects);