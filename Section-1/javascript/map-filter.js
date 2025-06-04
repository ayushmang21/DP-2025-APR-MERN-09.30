const nums = [8, 3, 5, 7, 2, 6, 4, 1, 9];

const sqr = nums.map((n) => {
    return n * n
});

console.log(sqr);

const prices = [520, 1450, 210, 9800, 710];

const gst = prices.map((p) => { return p + (p * 0.18) })

console.log(gst);


const prices2 = ['₹742.23', '₹125.65', '₹85.2', '₹999.99', '₹628.37']

const intPrice = prices2.map((p) => {
    return parseInt(p.slice(1));
})
console.log(intPrice);

// Filter

const even = nums.filter((n) => { return (n % 2 === 0) });
console.log(even);


const five = prices.filter((p) => { return (p >= 600) });
console.log(five);

// Questions

const brands = ['Apple', 'Samsung', 'OnePlus', 'Google', 'Sony', 'LG'];

const upper = brands.map((b) => {
    return b.toUpperCase();
});

console.log(upper);

const names = ['Ayushman', 'Sachin', 'Neha', 'Saloni', 'Princi', 'Harsh', 'Namita']

const longNames = names.filter((n) => { return n.length > 5 });

console.log(longNames);

const decimal = [2.5, 3.14, 1.618, 0.577, 2.718, 1.414, 0.301];
const int = decimal.map((i) => { return parseInt(i) });
console.log(int);
