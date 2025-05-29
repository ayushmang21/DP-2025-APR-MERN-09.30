for (let i = 1; i <= 10; i++) {
    // console.log(i);
}

// WAP to print all even numbers from 1 to 100.

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        // console.log(i + " is even");
    } else {
        // console.log("Odd Number");
    }
}

// 1 to 255, 21

// While Loop

let a = 10;

while (a <= 20) {
    // console.log(a);
    a++;
}

// WAP to print all even numbers from 1 to 100.

let i = 1;

while (i<=50){
    if(i %2 == 0){
        console.log(i + " is even");
        i++;
    }else{
        console.log(i + " is odd");
        i++;
    }
}


// Password Validation

const correctPin = 1234;
const pin = 5456;
let attempts = 0;

while (attempts <= 3) {
    if (pin == correctPin) {
        // console.log("Correct Pin");
        break;
    } else {
        // console.log("Incorrect Pin");
        attempts++;
    }
}

//Do While Loop

let b = 100;

do{
    // console.log(b);
    b++;
}while(b<=120);


let n = 50;
if (n%3===0 && n%5===0) {
    // console.log("FizzBuzz");
}else {
    // console.log(n);
}


i = 1;
while (i<=100){
    if (i%2===0){
        // console.log(i + " is even");
    }
    i++;
}

let atmnumber = 789456123456;
let pinnumber = 1234;
let enteredPin = prompt("Enter your ATM Pin:");
if (enteredPin == pin) {
    console.log("Access Granted");
    console.log("Your ATM Number is: " + atmnumber);
    console.log("Your Balance is: ₹10000");

}