function addNums(num1, num2) {
    sum = num1 + num2;
    // console.log(sum);
}

addNums(10, 20)
addNums(10, 2)

// 2nd Way

const getAvg = function (n1, n2, n3) {
    const avg = (n1 + n2 + n3) / 3;
    return avg;
}

const result = getAvg(10, 20, 30);
// console.log(result);

// 3rd Way
// Arrow Function
// fn () => {}
const factorial = (num) => {
    let f = 1;

    for (let i = 1; i <= num; i++) {
        f = f * i;
    }

    return f;
}

const fact = factorial(21);
// console.log(fact);

// Wap to find if a number is even or odd using a function.

const isEven = (n) => {
    if (n % 2 == 0) {
        // console.log(`${n} is an even number`);
        return `${n} is an even number`;
    } else {
        return `${n} is an odd number`;
    }
}
// isEven(10);
const evenOddResult = isEven(45);
// console.log(evenOddResult);

// WAP to check if a number is divisible by 15 and 5 or not using a function.

// WAp to check for the numbers that are divisible by 17 in the range of 97 to 247.

const seventeen = () => {
    for(let i = 97; i<= 247; i++){
        if(i%17 == 0){
            console.log(i + " is divisible by 17");
        }
    }
}

seventeen();

// WAP to find the sum of all even numbers in the range of 1 to 100 using a function.
sum = 0;
const sumEven = () => {
    for(let i = 1; i<=100; i++){
        if(i % 2 == 0){
            sum = sum + i;
            console.log(sum);
            
        }
    }
    return sum;
}

const evenSum = sumEven();
console.log(`Sum of all even numbers from 1 to 100 is: ${evenSum}`);
