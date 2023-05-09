function sumNumbers(input){

let firstNum = input[0];
let index = 1;
let sumOfNumbers = 0;


while(sumOfNumbers < firstNum){
    let currentNum = Number(input[index]);
    sumOfNumbers += currentNum;
    index++
}
console.log(sumOfNumbers);
}

sumNumbers(["100",
"10",
"20",
"30",
"40"])
