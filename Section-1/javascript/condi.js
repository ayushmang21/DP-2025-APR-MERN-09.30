num = 1234

if (num % 2 == 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

n1 = 56

if (n1 % 8 == 0) {
    console.log("Divisible by 8");
} else {
    console.log("Not Divisible by 8");
}

// WAP to check if a number is +ive, -ive or zero.

num3 = 45;

if (num3 > 0) {
    console.log("Positive");
} else if (num3 < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}

// WAP to check if a number is divisible by 3 and 5 or not.

num4 = 12;

if (num4 % 3 == 0 || num4 % 5 == 0) {
    console.log("Divisible by 3 and 5");
} else {
    console.log("Not Divisible by 3 and 5");
}

// WAP to check if a number is perfect square or not.

num5 = 25;
root = num5 ** 0.5;
console.log(root);

if (Number.isInteger(root)){
    console.log("Perfect Square");
}else{
    console.log("Not a Perfect Square");
}