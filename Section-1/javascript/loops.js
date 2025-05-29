for(let i = 0; i<11; i=i+2){
    // console.log(i);
}

// WAP to print all even numbers from 1 to 250.

// WAP to print numbers divisble by 21 from 1 to 2550.


// WHILE LOOP

let a = 10;

while(a <= 20){
    console.log(a);
    a++;
}

const correctPin = 1234;
const pin = 1235;
let attempts = 0;

while(attempts < 3){
    if(pin == correctPin){
        console.log("Correct Pin");
        break;
    }else{
        console.log("Incorrect Pin");
        attempts++;
    }
}

// while(pin != correctPin){
//     console.log("Incorrect Pin");
//     break;
// }

// WAP to 