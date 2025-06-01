const arr = [10, 21, 83, 41, 5, 66, 307, 8, 99, 101];

// For Loop

for(let i = 0; i <= arr.length - 1; i++){
    // console.log(arr[i]);
}

// For...of Loop

for (let i of arr){
    // console.log(i);
}

// ForEach Loop

arr.forEach((a, b, c) => {
    // console.log(a, b, c);
})

const sqr = [];

arr.forEach((e) => {
    sqr.push(e * e);
})

console.log(sqr);

// WAP to find the even numbers in the array using forEach.


const prices = [520, 1450, 210, 9800, 710]

// WAP to find the sum of all the prices.
// WAP to find the average of all the prices.
// WAP to find all the prices greater than 700.


// ADD 18% gst to all the prices and store the new prices in a new array.
// Add 12% discount to all the prices and store the new prices in a new array.