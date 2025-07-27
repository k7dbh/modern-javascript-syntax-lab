const space = "------------------------------"
const array1 = ['dog','cat','horse'];

const array2 = array1.map((currentElement) => {
    return currentElement + ' kitten';
});

console.log(array2);
console.log(space);
console.log('Ans1:')
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const nums2 = nums.map((num) => {
    return num*2
});

console.log(nums2);
console.log(space);

console.log('Ans2: ')
const pizzaToppings = ['Pinapple','Olives','Anchovies'];
const [firstTopping, secondtopping] = pizzaToppings;

console.log(firstTopping);
console.log(secondtopping);
console.log(space)

console.log('Ans3:')

const car = {
    make: 'Audi',
    model: 'q5',
};

const {make, model} = car;

console.log(make);
console.log(model);
console.log(space);

console.log("Ans4:");

const pizzaToppingss = ['Pineapple','Olives','Anchovies'];

const controversialPizzaToppings = [...pizzaToppingss];
console.log(controversialPizzaToppings);
console.log(space)
console.log("Ans5:")

// const originalObject = {
//     foo: 'Hello',
//     bar: 100,
// };

// const clonedObject = {...originalObject};

// clonedObject.foo = 'Goodbye';
// clonedObject.bar = 0;

// console.log('Original: ', originalObject);
// console.log('Clone:', clonedObject);
const cars = {
    make: 'Audi',
    model: 'q5',
};

const clonedCars = {...cars};

clonedCars.make = "myCar";
clonedCars.model = "q7";

console.log(clonedCars);

// const fruitInventory = {
//     apples: 2,
//     oranges: 4,
// };

// const selectedFruit = 'apples'; 
// const selectedFruitCount = fruitInventory[selectedFruit];
// console.log(selectedFruitCount);
// 
// working on exesize 6
const fruitsIn = {
    apples: 2,
    banana: 3,
    carot: 4,
}
const selectedFruit = 'apples'
const selectedFruitCount = fruitsIn[selectedFruit];
console.log(selectedFruitCount)


