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

const propertyName = 'username';
const userProfile = {
  [propertyName]: 'john_doe'
};

console.log(userProfile.username);        
console.log(userProfile[propertyName]);
console.log(space);
console.log("Ans8:")
function sentence(noun = 'cat', adjective = 'white') {
  console.log(`The ${noun} is ${adjective}.`);
}

sentence();                 
sentence('bear');            
sentence('horse', 'big');  
console.log(space)
console.log("Ans9:")
const pizza = 'tasty';
console.log(pizza === 'tasty' ? 'yum' : 'yuck');

console.log(space)
console.log('Ans10:')
// 1
const localLangConfig = null;
const LANG = localLangConfig || 'en';
console.log('Language setting:', LANG);
// 2
const userSavedTheme = null;
const USER_THEME = userSavedTheme || 'light';
console.log('User theme setting:', USER_THEME);

console.log(space);
console.log("Ans11")

const adventurer = {
  name: 'Alice',
};

let cat = adventurer.cat?.age;
console.log(cat)



