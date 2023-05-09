function operationsBetweenNumbers(input){

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];
    let result = 0;
    let evenOrOdd = ""

    switch(operator){
        case "+": result = num1 + num2;
        if (result % 2 === 0){
            evenOrOdd = "even";
        } else {
            evenOrOdd = "odd";
        } console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`); break;
        case "-": result = num1 - num2;
        if (result % 2 === 0){
            evenOrOdd = "even";
        } else {
            evenOrOdd = "odd";
        } console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`); break;
        case "*": result = num1 * num2;
        if (result % 2 === 0){
            evenOrOdd = "even";
        } else {
            evenOrOdd = "odd";
        } console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`); break;
        case "/":
        if(num2 != 0){
            result = num1 / num2;
            console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
        
        } else{
            console.log(`Cannot divide ${num1} by zero`);
        } break;
        case "%":
        if(num2 != 0){
            result = num1 % num2;
            console.log(`${num1} % ${num2} = ${result}`);
        } else{
            console.log(`Cannot divide ${num1} by zero`);
        }
    }

}

operationsBetweenNumbers(["7",
"3",
"*"])








