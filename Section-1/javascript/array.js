const arr = [785, 'hello', 3.14, true, null, undefined, {name: 'John'}, [1, 2, 3]];

console.log(arr);

console.log(typeof arr); // object

const movies = [ 'ThunderBolts', 'Bhul Chuk Maaf', 'Final Destination 6', 'KesariVeer', 'Kesari Chapter-2' ]

console.log(movies.length);

// Accessing elements in an array
console.log(movies[2]);

console.log(movies.indexOf('Bhul Chuk Maaf')); // 1

console.log(movies.at(-2));

// Replace an element

movies[3] = 'Deadpool 3'
console.log(movies);

// slicing an array
// console.log(movies.slice(1, 2));
// console.log(movies.slice(1, 300));
console.log(movies.slice(-4, -2));

// Adding elements to an array
movies.push('Avengers: The Kang Dynasty'); // Adds to the end
movies.unshift('Avengers: Secret Wars'); // Adds to the beginning
console.log(movies);

// Removing elements from an array
movies.pop(); // Removes from the end
movies.shift(); // Removes from the beginning
console.log(movies);

// Splicing

movies.splice(2, 1) // Removes 1 element at index 2

movies.splice(2, 0, 'Avengers: Secret Wars'); // Adds 'Avengers: Secret Wars' at index 2 without removing any element

movies.splice(2, 1, 'Avengers: The Kang Dynasty'); // Replaces the element at index 2 with 'Avengers: The Kang Dynasty'

console.log(movies);