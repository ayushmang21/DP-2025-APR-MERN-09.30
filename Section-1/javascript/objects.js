const user = {
    name: 'John',
    age: 30,
    email: 'john@gmail.com',
    password: 'abc123'
}

console.log(user);

console.log(user.name);

user.name = 'Raju'; // Updating the name property 
console.log(user.name);

user.city = 'Lucknow'; // Adding a new property
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

const smartphone = {
    brand: "Samsung",
    model: "S25 Ultra Edge",
    price: 158000,
    colors: ["Black", "White", "Blue"],
}

console.log(smartphone);

console.log(smartphone.colors);
console.log(smartphone.colors[2]); // Accessing the first color

console.log(smartphone.colors.push("Red")); // Adding a new color
console.log(smartphone.colors.length); // Checking the length of the colors array
console.log(smartphone.colors);

smartphone.colors[1] = "Green"; // Updating the second color
console.log(smartphone.colors);

smartphone.colors.shift(); // Removing the first color
console.log(smartphone.colors);

const smartphoneArray = [{
    brand: "Samsung",
    model: "S25 Ultra Edge",
    price: 158000,
    colors: ["Black", "White", "Blue"],
}, {
    brand: "Apple",
    model: "iPhone 15 Pro Max",
    price: 199999,
    colors: ["Silver", "Gold", "Space Black"],
},{
    brand: "OnePlus",
    model: "OnePlus 11",
    price: 59999,
    colors: ["Black", "Green", "Purple"],
}]

console.log(smartphoneArray);
console.log(smartphoneArray[0].colors[2]);

smartphoneArray[1].colors.unshift("Pink"); // Adding a new color to the second smartphone
console.log(smartphoneArray[1]);

// Add new color to 2nd smartphone.
// Change price of 3rd smartphone to 49999.
// replace first two colors of 3rd smartphone with "Blue" and "Red".
